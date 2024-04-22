const mockRecipesData = [
  {
    title: 'Creamy Tomato Soup',
    servings: 4,
    imageUrl:
      'https://www.saltandlavender.com/wp-content/uploads/2022/09/easy-tomato-soup-9.jpg',
    ingredients: [
      '4 cups fresh tomatoes, chopped',
      '1 onion, chopped',
      '2 garlic cloves, minced',
      '2 cups vegetable broth',
      '1/2 cup heavy cream',
      'Salt and pepper to taste',
    ],
    preparation:
      'Start by sautéing the onions and garlic in a large pot over medium heat until they are translucent. Add the chopped tomatoes and vegetable broth, then bring the mixture to a boil. Reduce heat and simmer for 20 minutes. Blend the soup in batches until smooth, return to the pot, and stir in the heavy cream. Season with salt and pepper. Heat through and serve warm.',
  },
  {
    title: 'Spicy Chicken Curry',
    servings: 4,
    imageUrl:
      'https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg',
    ingredients: [
      '2 lbs chicken breast, cut into chunks',
      '1 large onion, finely chopped',
      '4 garlic cloves, minced',
      '2 tbsp ginger, minced',
      '2 tbsp curry powder',
      '1 tsp red chili powder',
      '1 can (14 oz) diced tomatoes',
      '1 can (14 oz) coconut milk',
      'Salt to taste',
      'Fresh cilantro, for garnish',
    ],
    preparation:
      'Heat oil in a large pot over medium heat. Add onions, garlic, and ginger and sauté until onions are translucent. Add curry powder and chili powder, cooking for another minute. Add chicken and brown on all sides. Pour in tomatoes and coconut milk, bring to a boil then simmer for 25 minutes or until chicken is tender. Season with salt, garnish with cilantro, and serve with rice.',
  },
  {
    title: 'Vegan Chocolate Cake',
    servings: 8,
    imageUrl:
      'https://jessicainthekitchen.com/wp-content/uploads/2023/01/Chocolate-Cake0281.jpg',
    ingredients: [
      '1 and 1/2 cups all-purpose flour',
      '1 cup granulated sugar',
      '1/3 cup unsweetened cocoa powder',
      '1 tsp baking soda',
      '1/2 tsp salt',
      '1 cup warm water',
      '1 tsp vanilla extract',
      '1/3 cup vegetable oil',
      '1 tsp distilled white or apple cider vinegar',
      'Powdered sugar, for dusting',
    ],
    preparation:
      'Preheat your oven to 350°F (175°C). Grease and flour an 8-inch cake pan. In a large bowl, whisk together flour, sugar, cocoa, baking soda, and salt. Add water, vanilla, oil, and vinegar; mix until smooth. Pour into the prepared pan and bake for 30-35 minutes. Let cool in the pan for 10 minutes, then turn out onto a wire rack to cool completely. Dust with powdered sugar before serving.',
  },
  {
    title: 'Classic White Bread',
    servings: 2,
    imageUrl:
      'https://www.theflavorbender.com/wp-content/uploads/2019/02/Homemade-Bread-Featured-1.jpg',
    ingredients: [
      '6 cups all-purpose flour',
      '2 tbsp sugar',
      '1 tbsp salt',
      '2 tbsp vegetable oil',
      '2 1/4 tsp active dry yeast (1 packet)',
      '2 1/4 cups warm water',
    ],
    preparation:
      'In a large bowl, dissolve yeast and sugar in warm water. Add salt, oil, and flour. Knead until smooth. Let rise until doubled. Punch down, divide into two loaves, and place in greased loaf pans. Let rise again until doubled. Bake at 375°F (190°C) for 30 minutes.',
  },
  {
    title: 'Whole Wheat Bread',
    servings: 1,
    imageUrl:
      'https://www.organicsbylee.com/wp-content/uploads/2019/03/wholewheatbread-copy.jpg',
    ingredients: [
      '3 cups whole wheat flour',
      '1/4 cup honey',
      '1/3 cup oil',
      '1 tsp salt',
      '1 packet dry yeast',
      '1 1/4 cups warm water',
    ],
    preparation:
      'Mix all dry ingredients including yeast. Add honey and oil to warm water and combine with dry ingredients. Knead until smooth. Let rise until doubled. Shape into a loaf, place in a greased pan, and allow to rise. Bake at 350°F (175°C) for 35 minutes.',
  },
  {
    title: 'French Baguette',
    servings: 2,
    imageUrl:
      'https://www.aberdeenskitchen.com/wp-content/uploads/2020/08/Classic-Crusty-French-Baguettes-3.jpg',
    ingredients: [
      '4 cups bread flour',
      '1 tbsp sugar',
      '2 tsp salt',
      '1 packet active dry yeast',
      '1 1/2 cups warm water',
    ],
    preparation:
      'Dissolve yeast and sugar in warm water. Add flour and salt, mix until a dough forms. Knead until smooth and elastic. Let rise until doubled. Divide into two, roll into long loaves, and score the tops. Let rise. Bake at 450°F (232°C) for 25 minutes with steam.',
  },
  {
    title: 'Sourdough Bread',
    servings: 1,
    imageUrl:
      'https://littlespoonfarm.com/wp-content/uploads/2020/01/Sourdough-Bread-Recipe-for-Beginners.jpg',
    ingredients: [
      '3 cups bread flour',
      '1 1/2 cups sourdough starter',
      '1 tsp salt',
      '3/4 cup water',
      '1/4 cup sugar',
    ],
    preparation:
      'Combine all ingredients in a bowl. Mix until dough forms then knead until smooth. Cover and let rise for 4 to 8 hours. Shape into a loaf, let proof for additional 2-4 hours. Bake at 425°F (218°C) for 30 minutes.',
  },
  {
    title: 'Rye Bread',
    servings: 1,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwT7-Js8smeopY66AeqVDJ1-KlNgGe7RIb59yM3gZMVA&s',
    ingredients: [
      '2 cups rye flour',
      '2 cups bread flour',
      '1 tbsp sugar',
      '2 tsp salt',
      '1 packet dry yeast',
      '1 1/2 cups warm water',
      '1 tbsp caraway seeds',
    ],
    preparation:
      'Mix flours, sugar, salt, yeast, and caraway seeds. Add warm water and form a dough. Knead until elastic. Let rise until doubled. Shape into a loaf, let rise again. Bake at 375°F (190°C) for 35 minutes.',
  },
  {
    title: 'Ciabatta',
    servings: 2,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamBXo_i9ob2djjjlwcpxKIYgASQJtvWNUrvpjB-F6xA&s',
    ingredients: [
      '4 cups bread flour',
      '2 tsp salt',
      '1 tsp sugar',
      '1 packet dry yeast',
      '2 cups warm water',
      '1 tbsp olive oil',
    ],
    preparation:
      'Combine yeast, sugar, and warm water. Let sit until frothy. Add flour, salt, and oil. Mix to form a sticky dough.',
  },
];

export default mockRecipesData;
