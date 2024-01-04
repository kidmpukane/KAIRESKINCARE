import numpy as np
import pandas as pd
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.utils import to_categorical
from sklearn.model_selection import train_test_split

# Define the data
normal_skin = [0, -1, 0, 1, 0]
oily_skin = [1, 1, 1, 0, 1]
dry_skin = [-1, -1, -1, -1, -1]
combination_skin = [0.5, 0, 0.5, 0, 0]
sensitive_skin = [-0.5, 0, -0.5, 1, 1]

# Convert the data to a NumPy array
X = np.array([normal_skin, oily_skin, dry_skin,
             combination_skin, sensitive_skin])

# Convert the labels to one-hot encoded format
y = to_categorical([0, 1, 2, 3, 4])

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Define the model
model = Sequential([
    Dense(160, input_shape=(X.shape[1],), activation='relu'),  # Input layer
    Dense(5, activation='softmax'),  # Output layer
])

# Compile the model
model.compile(optimizer='adam', loss='categorical_crossentropy',
              metrics=['accuracy'])

# Train the model
history = model.fit(X_train, y_train, epochs=320,
                    batch_size=5, validation_data=(X_test, y_test))

# Define a function to predict the skin type


def predict_skin_type(model, quiz_answers):
    predicted_skin_type = model.predict(quiz_answers)
    predicted_skin_type_index = np.argmax(predicted_skin_type)
    return predicted_skin_type_index


# # Test the model
# normal_skin = np.array([normal_skin])
# print(predict_skin_type(model, normal_skin))

# oily_skin = np.array([oily_skin])
# print(predict_skin_type(model, oily_skin))

# dry_skin = np.array([dry_skin])
# print(predict_skin_type(model, dry_skin))

# combination_skin = np.array([combination_skin])
# print(predict_skin_type(model, combination_skin))

# sensitive_skin = np.array([sensitive_skin])
# print(predict_skin_type(model, sensitive_skin))
