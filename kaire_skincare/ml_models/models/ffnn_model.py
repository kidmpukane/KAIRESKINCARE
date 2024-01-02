import pandas as pd

rec_ing_path = "../data/recommended_ingredients.csv"
skin_test_path = "../data/skin_type_test.csv"
prod_path = "../data/skincare_products.csv"

prod_df = pd.read_csv(prod_path)
rec_ing_df = pd.read_csv(rec_ing_path)
skin_test_df = pd.read_csv(skin_test_path)
