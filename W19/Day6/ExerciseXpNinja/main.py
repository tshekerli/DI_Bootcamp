# Exercise 1: Cars
manufacturers_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
manufacturers_list = manufacturers_string.split(", ")

print(f"There are {len(manufacturers_list)} manufacturers in the list.")

manufacturers_list.sort(reverse=True)
print("Manufacturers in descending order: ", manufacturers_list)

manufacturers_with_o = [manufacturer for manufacturer in manufacturers_list if 'o' in manufacturer]
print(f"{len(manufacturers_with_o)} manufacturers have the letter 'o' in them.")

manufacturers_without_i = [manufacturer for manufacturer in manufacturers_list if 'i' not in manufacturer]
print(f"{len(manufacturers_without_i)} manufacturers do not have the letter 'i' in them.")

# Bonus
manufacturers_list_duplicates = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
manufacturers_set = set(manufacturers_list_duplicates)
print("Companies without duplicates: ", ', '.join(manufacturers_set))
print(f"There are {len(manufacturers_set)} companies in the list.")

manufacturers_list.sort()
manufacturers_reversed = [manufacturer[::-1] for manufacturer in manufacturers_list]
print("Manufacturers in ascending order with reversed names: ", manufacturers_reversed)