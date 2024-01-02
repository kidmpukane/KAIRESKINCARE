import numpy as np
import pandas as pd
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

rec_ing_path = "../data/recommended_ingredients.csv"
skin_test_path = "../data/skin_type_test.csv"
prod_path = "../data/skincare_products.csv"

prod_df = pd.read_csv(prod_path)
rec_ing_df = pd.read_csv(rec_ing_path)
skin_test_df = pd.read_csv(skin_test_path)

# Assuming X contains the normalized quiz data (in the form of a numpy array)

# Define the FFNN model
model = Sequential([
    Dense(10, input_shape=(X.shape[1],), activation='relu'),  # Input layer
    Dense(8, activation='relu'),  # Hidden layer
    # Output layer (softmax for multiclass classification)
    Dense(5, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam', loss='categorical_crossentropy',
              metrics=['accuracy'])

# Assuming 'y' contains the corresponding skin type labels encoded as one-hot vectors
# Example: Normal Skin - [1, 0, 0, 0, 0], Oily Skin - [0, 1, 0, 0, 0], and so on

# Train the model
# Adjust epochs and batch_size as needed
model.fit(X, y, epochs=50, batch_size=32, validation_split=0.2)

# Once trained, use the model to predict the skin type based on new quiz answers
# Replace 'new_quiz_answers' with your own normalized quiz data
new_quiz_answers = np.array([[0, 1, -1, 0.5, -0.5]])  # Example quiz answers
predicted_skin_type = model.predict(new_quiz_answers)
predicted_skin_type_index = np.argmax(predicted_skin_type)
