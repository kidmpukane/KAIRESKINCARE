import numpy as np
import pandas as pd
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

# Read data
rec_ing_path = "../data/recommended_ingredients.csv"
skin_test_path = "../data/skin_type_test.csv"
prod_path = "../data/skincare_products.csv"

prod_df = pd.read_csv(prod_path)
rec_ing_df = pd.read_csv(rec_ing_path)
skin_test_df = pd.read_csv(skin_test_path)

# Preprocess skin test data
X = skin_test_df.drop(columns='Question').values  # Features
y = np.eye(len(skin_test_df.columns) -
           1)[np.argmax(skin_test_df.iloc[:, 1:].values, axis=1)]  # One-hot encoded labels

X_train, X_val, y_train, y_val = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Define the FFNN model
model = Sequential([
    Dense(10, input_shape=(X.shape[1],), activation='relu'),  # Input layer
    Dense(24, activation='relu'),  # Hidden layer 1
    Dense(16, activation='relu'),  # Hidden layer 2
    Dense(12, activation='relu'),  # Hidden layer 3
    Dense(8, activation='relu'),  # Hidden layer 3
    Dense(4, activation='relu'),  # Hidden layer 3
    Dense(y.shape[1], activation='softmax')  # Output layer
])


# Compile the model
model.compile(optimizer='adam', loss='categorical_crossentropy',
              metrics=['accuracy'])

# Train the model
history = model.fit(X_train, y_train, epochs=320,
                    batch_size=32, validation_data=(X_val, y_val))
# Plot learning curves
plt.plot(history.history['loss'], label='train')
plt.plot(history.history['val_loss'], label='val')
plt.title('Model Loss')
plt.xlabel('Epochs')
plt.ylabel('Loss')
plt.legend()
plt.show()

plt.plot(history.history['accuracy'], label='train')
plt.plot(history.history['val_accuracy'], label='val')
plt.title('Model Accuracy')
plt.xlabel('Epochs')
plt.ylabel('Accuracy')
plt.legend()
plt.show()

# Predict skin type based on new quiz answers
new_quiz_answers = np.array([[0, 1, -1, 0.5, -0.5]])  # Example quiz answers
predicted_skin_type = model.predict(new_quiz_answers)
predicted_skin_type_index = np.argmax(predicted_skin_type)
# evaluate the keras model
# Evaluate the model on the test set (validation data)
loss, accuracy = model.evaluate(X_val, y_val, verbose=0)
print(f'Accuracy: {accuracy*100:.2f}%')
