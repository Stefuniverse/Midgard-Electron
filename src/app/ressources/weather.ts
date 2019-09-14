
export const TEMPERATURERANGES = { 'sehr kalt': '<-15', 'kalt': '-15 - -5', 'kühl': '-4 - 5', 'mild': '6-19', 'warm': '20-29', 'heiß': '30-36', 'sehr heiß': '> 36' }

export const CLIMAPERCOUNTRY = [
  { 'name': '1A', 'countries': { 'Waeland': ['Arktis'], 'Fuardain': ['Arktis'] } },
  { 'name': '2A', 'countries': { 'Clanngadarn': ['Berg', 'Steilküste', 'Küste', 'Wald', 'Zauberwald', 'Urwald', 'Sumpf', 'Gewässer', 'Hochebene', 'Bergwald', 'Ebene'], 'Waeland': ['Berg', 'Steilküste', 'Küste', 'Wald', 'Zauberwald', 'Urwald', 'Sumpf', 'Gewässer', 'Ebene', 'Gebirgstal', 'Hochebene', 'Bergwald'], 'Moravod': ['Berg', 'Wald', 'Steilküste', 'Küste', 'Zauberwald', 'Urwald', 'Sumpf', 'Gewässer', 'Ebene', 'Gebirgstal', 'Hochebene'], 'Medjis': ['Wald', 'Berg', 'Steilküste', 'Küste', 'Zauberwald', 'Urwald', 'Sumpf', 'Gewässer', 'Gebirgstal', 'Hochebene', 'Steppe', 'Bergwald'] } },
  { 'name': '2B', 'countries': { 'Ywerddon': ['Berg', 'Küste', 'Wald', 'Zauberwald', 'Urwald', 'Sumpf', 'Gewässer', 'Hochebene', 'Bergwald', 'Ebene'], 'Alba': ['Berg', 'Küste', 'Wald', 'Zauberwald', 'Urwald', 'Sumpf', 'Gewässer', 'Hochebene', 'Bergwald', 'Ebene'], 'Erainn': ['Berg', 'Küste', 'Wald', 'Zauberwald', 'Urwald', 'Sumpf', 'Gewässer', 'Hochebene', 'Bergwald', 'Ebene'], 'Waeland': ['Berg', 'Küste', 'Wald', 'Zauberwald', 'Urwald', 'Sumpf', 'Gewässer', 'Ebene', 'Gebirgstal', 'Hochebene', 'Bergwald'] } },
  { 'name': '2C', 'countries': { 'Moravod': ['Berg', 'Wald', 'Steilküste', 'Küste', 'Zauberwald', 'Urwald', 'Sumpf', 'Gewässer', 'Ebene', 'Gebirgstal', 'Hochebene'], 'Medjis': ['Wald', 'Berg', 'Steilküste', 'Küste', 'Zauberwald', 'Urwald', 'Sumpf', 'Gewässer', 'Gebirgstal', 'Hochebene', 'Steppe', 'Bergwald'] } },
  { 'name': '3A', 'countries': { 'Inseln unter dem Westwind': ['Berg', 'Steilküste', 'Küste', 'Wald', 'Zauberwald', 'Urwald', 'Höhle', 'Sumpf', 'Gewässer', 'Gebirgstal', 'Steppe'], 'Erainn': ['Berg', 'Steilküste', 'Küste', 'Wald', 'Zauberwald', 'Urwald', 'Höhle', 'Sumpf', 'Gewässer', 'Hochebene', 'Ebene'], 'Chryseia': ['Berg', 'Steilküste', 'Küste', 'Wald', 'Zauberwald', 'Urwald', 'Höhle', 'Sumpf', 'Gewässer', 'Hochebene', 'Ebene'], 'Valian': ['Berg', 'Steilküste', 'Küste', 'Wald', 'Zauberwald', 'Urwald', 'Höhle', 'Sumpf', 'Gewässer', 'Steppe', 'Ebene'], 'Küstenstaaten': ['Berg', 'Steilküste', 'Wald', 'Zauberwald', 'Urwald', 'Steppe', 'Savanne', 'Höhle', 'Sumpf', 'Hochebene', 'Gewässer', 'Küste'], 'Pforten-Archipel': ['Berg', 'Steilküste', 'Küste', 'Wald', 'Zauberwald', 'Urwald', 'Höhle', 'Sumpf', 'Gewässer', 'Gebirgstal', 'Steppe'] } },
  { 'name': '3B', 'countries': { 'Nahuatlan': ['Berg', 'Steilküste', 'Küste', 'Wald', 'Zauberwald', 'Gewässer', 'Dschungel', 'Steppe', 'Savanne', 'Urwald', 'Höhle', 'Sumpf', 'Hochebene', 'Gebirgstal', 'Wüste'], 'Eschar': ['Wüste', 'Gewässer', 'Berg', 'Steppe', 'Savanne', 'Küste', 'Steilküste', 'Bergwald', 'Höhle'], 'Buluga': ['Berg', 'Wald', 'Steilküste', 'Zauberwald', 'Steppe', 'Savanne', 'Urwald', 'Höhle', 'Sumpf', 'Gewässer', 'Küste', 'Bergwald', 'Hochebene', 'Dschungel', 'Wüste'], 'Urruti': ['Sumpf', 'Küste', 'Steppe', 'Savanne', 'Berg', 'Gewässer', 'Steilküste', 'Wald', 'Zauberwald', 'Urwald', 'Höhle', 'Hochebene', 'Bergwald'], 'Rawindra': ['Dschungel', 'Berg', 'Steilküste', 'Küste', 'Wald', 'Zauberwald', 'Steppe', 'Savanne', 'Urwald', 'Höhle', 'Sumpf', 'Gewässer', 'Gebirgstal', 'Bergwald'], 'Aran': ['Steppe', 'Wüste', 'Berg', 'Wald', 'Steilküste', 'Küste', 'Savanne', 'Hochebene', 'Gewässer', 'Höhle'], 'Mokattam': ['Savanne', 'Steppe', 'Berg', 'Sumpf', 'Dschungel', 'Küste', 'Wald', 'Steilküste', 'Zauberwald', 'Gewässer', 'Bergwald', 'Höhle', 'Urwald'] } },
  { 'name': '3C', 'countries': { 'Eschar': ['Wüste', 'Gewässer', 'Berg', 'Steppe', 'Savanne', 'Küste', 'Steilküste'], 'Aran': ['Steppe', 'Wüste', 'Berg', 'Steilküste', 'Küste', 'Savanne', 'Gewässer'], 'Buluga': ['Berg', 'Steilküste', 'Steppe', 'Savanne', 'Gewässer', 'Küste', 'Wüste'] } },
  { 'name': '3D', 'countries': { 'Tegarische Steppe': ['Steppe', 'Wald', 'Berg', 'Steilküste', 'Küste', 'Savanne', 'Sumpf', 'Gewässer', 'Hochebene', 'Urwald'], 'Aran': ['Steppe', 'Berg', 'Wald', 'Steilküste', 'Küste', 'Savanne', 'Hochebene', 'Gewässer'] } },
  { 'name': '3E', 'countries': { 'KanThaiPan': ['Berg', 'Wald', 'Steilküste', 'Küste', 'Zauberwald', 'Urwald', 'Steppe', 'Hochebene', 'Sumpf', 'Gewässer', 'Gebirgstal'], 'Ekavali-Archipel': ['Berg', 'Wald', 'Steilküste', 'Küste', 'Zauberwald', 'Urwald', 'Steppe', 'Sumpf', 'Gewässer'] } },
  { 'name': '4', 'countries': { 'KanThaiPan': ['Berg', 'Wald', 'Steilküste', 'Küste', 'Zauberwald', 'Urwald', 'Steppe', 'Hochebene', 'Sumpf', 'Gewässer', 'Gebirgstal'], 'Rawindra': ['Dschungel', 'Berg', 'Steilküste', 'Küste', 'Wald', 'Zauberwald', 'Steppe', 'Savanne', 'Urwald', 'Sumpf', 'Gewässer', 'Gebirgstal', 'Bergwald'], 'Nahuatlan': ['Berg', 'Steilküste', 'Küste', 'Wald', 'Zauberwald', 'Gewässer', 'Dschungel', 'Steppe', 'Savanne', 'Urwald', 'Sumpf', 'Hochebene', 'Gebirgstal'], 'Feuerinseln': ['Berg', 'Steilküste', 'Küste', 'Wald', 'Zauberwald', 'Gewässer', 'Steppe', 'Savanne', 'Urwald', 'Sumpf', 'Dschungel', 'Gebirgstal', 'Hochebene', 'Bergwald'], 'Ikenga Becken': ['Dschungel', 'Gewässer', 'Sumpf', 'Küste', 'Wald', 'Zauberwald', 'Berg', 'Bergwald', 'Gebirgstal'], 'Ekavali-Archipel': ['Berg', 'Wald', 'Steilküste', 'Küste', 'Zauberwald', 'Urwald', 'Steppe', 'Sumpf', 'Gewässer'] } }

]

export const CLIMATEZONES = {
  '1A': {
    'Temperatur': {
      'Frühling': { 'sehr kalt': 98, 'kalt': 100 },
      'Sommer': { 'sehr kalt': 80, 'kalt': 100 },
      'Herbst': { 'sehr kalt': 98, 'kalt': 100 },
      'Winter': { 'sehr kalt': 100 }
    },
    'Niederschlag': {
      'Frühling': { 0: 90, 1: 95, 2: 100 },
      'Sommer': { 0: 80, 1: 90, 2: 95, 3: 100 },
      'Herbst': { 0: 90, 1: 95, 2: 100 },
      'Winter': { 0: 100 }
    },
    'Windstärke': {
      'Frühling': { 1: 10, 2: 20, 3: 60, 4: 100 },
      'Sommer': { 0: 10, 1: 20, 2: 35, 3: 75, 4: 100 },
      'Herbst': { 1: 10, 2: 20, 3: 60, 4: 100 },
      'Winter': { 1: 5, 2: 15, 3: 40, 4: 100 }
    },
    'Bewölkung': {
      'Frühling': { 0: 5, 1: 20, 2: 65, 3: 98, 4: 100 },
      'Sommer': { 0: 15, 1: 30, 2: 85, 3: 100 },
      'Herbst': { 0: 5, 1: 20, 2: 65, 3: 98, 4: 100 },
      'Winter': { 1: 10, 2: 70, 3: 95, 4: 100 }
    }
  },
  '1B': {
    'Temperatur': {
      'Frühling': { 'sehr kalt': 30, 'kalt': 90, 'kühl': 100 },
      'Sommer': { 'sehr kalt': 10, 'kalt': 80, 'kühl': 100 },
      'Herbst': { 'sehr kalt': 30, 'kalt': 90, 'kühl': 100 },
      'Winter': { 'sehr kalt': 60, 'kalt': 98, 'kühl': 100 }
    },
    'Niederschlag': {
      'Frühling': { 0: 90, 1: 95, 2: 100 },
      'Sommer': { 0: 80, 1: 90, 2: 95, 3: 100 },
      'Herbst': { 0: 90, 1: 95, 2: 100 },
      'Winter': { 0: 95, 1: 100 }
    },
    'Windstärke': {
      'Frühling': { 1: 10, 2: 20, 3: 60, 4: 100 },
      'Sommer': { 0: 10, 1: 20, 2: 35, 3: 75, 4: 100 },
      'Herbst': { 1: 10, 2: 20, 3: 60, 4: 100 },
      'Winter': { 1: 5, 2: 15, 3: 40, 4: 100 }
    },
    'Bewölkung': {
      'Frühling': { 0: 5, 1: 20, 2: 65, 3: 98, 4: 100 },
      'Sommer': { 0: 15, 1: 30, 2: 85, 3: 100 },
      'Herbst': { 0: 5, 1: 20, 2: 65, 3: 98, 4: 100 },
      'Winter': { 1: 10, 2: 70, 3: 95, 4: 100 }
    }
  },
  '2A': {
    'Temperatur': {
      'Frühling': { 'sehr kalt': 5, 'kalt': 40, 'kühl': 90, 'mild': 100 },
      'Sommer': { 'kalt': 20, 'kühl': 60, 'mild': 100 },
      'Herbst': { 'sehr kalt': 10, 'kalt': 50, 'kühl': 90, 'mild': 100 },
      'Winter': { 'sehr kalt': 40, 'kalt': 95, 'kühl': 100 }
    },
    'Niederschlag': {
      'Frühling': { 0: 80, 1: 92, 2: 95, 4: 100 },
      'Sommer': { 0: 70, 1: 90, 2: 95, 4: 100 },
      'Herbst': { 0: 85, 1: 94, 2: 97, 4: 100 },
      'Winter': { 0: 90, 1: 97, 4: 100 }
    },
    'Windstärke': {
      'Frühling': { 1: 35, 2: 60, 3: 85, 4: 100 },
      'Sommer': { 0: 5, 1: 45, 2: 70, 3: 90, 4: 100 },
      'Herbst': { 1: 10, 2: 50, 3: 80, 4: 100 },
      'Winter': { 1: 20, 2: 40, 3: 75, 4: 100 }
    },
    'Bewölkung': {
      'Frühling': { 0: 10, 1: 20, 2: 50, 3: 85, 4: 100 },
      'Sommer': { 0: 20, 1: 40, 2: 65, 3: 90, 4: 100 },
      'Herbst': { 1: 10, 2: 40, 3: 70, 4: 100 },
      'Winter': { 0: 15, 1: 25, 2: 45, 3: 70, 4: 100 }
    }
  },
  '2B': {
    'Temperatur': {
      'Frühling': { 'kühl': 5, 'mild': 80, 'warm': 100 },
      'Sommer': { 'mild': 25, 'warm': 80, 'heiß': 100 },
      'Herbst': { 'kühl': 10, 'mild': 95, 'warm': 100 },
      'Winter': { 'kalt': 5, 'kühl': 70, 'mild': 100 }
    },
    'Niederschlag': {
      'Frühling': { 0: 20, 1: 70, 2: 85, 3: 90, 4: 100 },
      'Sommer': { 0: 80, 1: 85, 2: 90, 3: 95, 4: 100 },
      'Herbst': { 0: 25, 1: 50, 2: 80, 3: 85, 4: 100 },
      'Winter': { 0: 60, 1: 75, 2: 80, 3: 85, 4: 100 }
    },
    'Windstärke': {
      'Frühling': { 0: 15, 1: 30, 2: 85, 3: 95, 4: 100 },
      'Sommer': { 0: 20, 1: 50, 2: 95, 3: 98, 4: 100 },
      'Herbst': { 0: 5, 1: 20, 2: 65, 3: 90, 4: 100 },
      'Winter': { 0: 10, 1: 20, 2: 70, 3: 85, 4: 100 }
    },
    'Bewölkung': {
      'Frühling': { 0: 20, 1: 60, 2: 80, 3: 95, 4: 100 },
      'Sommer': { 0: 40, 1: 80, 2: 90, 3: 100 },
      'Herbst': { 0: 15, 1: 35, 2: 55, 3: 90, 4: 100 },
      'Winter': { 0: 30, 1: 50, 2: 70, 3: 95, 4: 100 }
    }
  },
  '2C': {
    'Temperatur': {
      'Frühling': { 'kühl': 25, 'mild': 60, 'warm': 100 },
      'Sommer': { 'mild': 25, 'warm': 80, 'heiß': 100 },
      'Herbst': { 'kalt': 5, 'kühl': 35, 'mild': 75, 'warm': 100 },
      'Winter': { 'sehr kalt': 10, 'kalt': 30, 'kühl': 95, 'mild': 100 }
    },
    'Niederschlag': {
      'Frühling': { 0: 70, 1: 90, 2: 100 },
      'Sommer': { 0: 50, 1: 80, 2: 90, 3: 95, 4: 100 },
      'Herbst': { 0: 65, 1: 90, 2: 95, 3: 100 },
      'Winter': { 0: 70, 1: 90, 2: 95, 3: 100 }
    },
    'Windstärke': {
      'Frühling': { 0: 5, 1: 40, 2: 75, 3: 90, 4: 100 },
      'Sommer': { 0: 10, 1: 55, 2: 90, 3: 95, 4: 100 },
      'Herbst': { 1: 15, 2: 65, 3: 85, 4: 100 },
      'Winter': { 0: 5, 1: 30, 2: 70, 3: 80, 4: 100 }
    },
    'Bewölkung': {
      'Frühling': { 0: 15, 1: 35, 2: 65, 3: 95, 4: 100 },
      'Sommer': { 0: 30, 1: 70, 2: 85, 3: 100 },
      'Herbst': { 0: 5, 1: 15, 2: 55, 3: 85, 4: 100 },
      'Winter': { 0: 25, 1: 50, 2: 70, 3: 90, 4: 100 }
    }
  },
  '3A': {
    'Temperatur': {
      'Frühling': { 'mild': 80, 'warm': 97, 'heiß': 100 },
      'Sommer': { 'mild': 8, 'warm': 75, 'heiß': 100 },
      'Herbst': { 'mild': 95, 'warm': 98, 'heiß': 100 },
      'Winter': { 'kühl': 75, 'mild': 99, 'warm': 100 }
    },
    'Niederschlag': {
      'Frühling': { 0: 40, 1: 70, 2: 85, 3: 90, 4: 100 },
      'Sommer': { 0: 90, 1: 95, 2: 100 },
      'Herbst': { 0: 25, 1: 50, 2: 80, 3: 85, 4: 100 },
      'Winter': { 0: 30, 1: 50, 2: 75, 3: 85, 4: 100 }
    },
    'Windstärke': {
      'Frühling': { 0: 20, 1: 40, 2: 85, 3: 100 },
      'Sommer': { 1: 15, 2: 70, 3: 96, 4: 100 },
      'Herbst': { 1: 10, 2: 65, 3: 90, 4: 100 },
      'Winter': { 0: 10, 1: 50, 2: 90, 3: 100 }
    },
    'Bewölkung': {
      'Frühling': { 0: 20, 1: 60, 2: 80, 3: 95, 4: 100 },
      'Sommer': { 0: 40, 1: 80, 2: 90, 3: 100 },
      'Herbst': { 0: 15, 1: 35, 2: 55, 3: 90, 4: 100 },
      'Winter': { 0: 30, 1: 50, 2: 70, 3: 95, 4: 100 }
    }
  },
  '3B': {
    'Temperatur': {
      'Frühling': { 'mild': 20, 'warm': 75, 'heiß': 90, 'sehr heiß': 100 },
      'Sommer': { 'mild': 40, 'warm': 90, 'heiß': 98, 'sehr heiß': 100 },
      'Herbst': { 'mild': 30, 'warm': 85, 'heiß': 95, 'sehr heiß': 100 },
      'Winter': { 'kühl': 5, 'mild': 90, 'warm': 95, 'heiß': 100 }
    },
    'Niederschlag': {
      'Frühling': { 0: 90, 2: 100 },
      'Sommer': { 0: 25, 2: 45, 3: 70, 4: 100 },
      'Herbst': { 0: 70, 2: 80, 3: 95, 4: 100 },
      'Winter': { 0: 100 }
    },
    'Windstärke': {
      'Frühling': { 0: 20, 1: 40, 2: 95, 3: 98, 4: 100 },
      'Sommer': { 0: 30, 1: 80, 2: 95, 3: 100 },
      'Herbst': { 1: 40, 2: 90, 3: 95, 4: 100 },
      'Winter': { 0: 15, 1: 30, 2: 80, 3: 90, 4: 100 }
    },
    'Bewölkung': {
      'Frühling': { 0: 40, 1: 85, 2: 95, 3: 100 },
      'Sommer': { 0: 80, 1: 90, 2: 100 },
      'Herbst': { 0: 30, 1: 80, 2: 95, 3: 100 },
      'Winter': { 0: 60, 1: 70, 2: 90, 3: 100 }
    }
  },
  '3C': {
    'Temperatur': {
      'Frühling': { 'kühl': 15, 'mild': 25, 'warm': 80, 'heiß': 100 },
      'Sommer': { 'mild': 10, 'warm': 30, 'heiß': 90, 'sehr heiß': 100 },
      'Herbst': { 'kühl': 15, 'mild': 40, 'warm': 80, 'heiß': 95, 'sehr heiß': 100 },
      'Winter': { 'kühl': 40, 'mild': 80, 'warm': 100 }
    },
    'Niederschlag': {
      'Frühling': { 0: 100 },
      'Sommer': { 0: 100 },
      'Herbst': { 0: 100 },
      'Winter': { 0: 80, 1: 95, 2: 100 }
    },
    'Windstärke': {
      'Frühling': { 0: 45, 1: 60, 2: 80, 3: 90, 4: 100 },
      'Sommer': { 0: 40, 1: 70, 2: 90, 3: 95, 4: 100 },
      'Herbst': { 0: 30, 1: 50, 2: 70, 3: 85, 4: 100 },
      'Winter': { 0: 35, 1: 45, 2: 70, 3: 80, 4: 100 }
    },
    'Bewölkung': {
      'Frühling': { 0: 60, 1: 90, 2: 100 },
      'Sommer': { 0: 90, 1: 95, 2: 100 },
      'Herbst': { 0: 50, 1: 70, 2: 100 },
      'Winter': { 0: 70, 1: 85, 2: 100 }
    }
  },
  '3D': {
    'Temperatur': {
      'Frühling': { 'kühl': 40, 'mild': 90, 'warm': 100 },
      'Sommer': { 'kühl': 25, 'mild': 40, 'warm': 90, 'heiß': 100 },
      'Herbst': { 'kühl': 30, 'mild': 85, 'warm': 100 },
      'Winter': { 'kühl': 60, 'mild': 98, 'warm': 100 }
    },
    'Niederschlag': {
      'Frühling': { 0: 90, 2: 100 },
      'Sommer': { 0: 25, 2: 45, 3: 70, 4: 100 },
      'Herbst': { 0: 70, 2: 80, 3: 95, 4: 100 },
      'Winter': { 0: 100 }
    },
    'Windstärke': {
      'Frühling': { 0: 20, 1: 40, 2: 95, 3: 98, 4: 100 },
      'Sommer': { 0: 30, 1: 80, 2: 95, 3: 100 },
      'Herbst': { 1: 40, 2: 90, 3: 95, 4: 100 },
      'Winter': { 0: 15, 1: 30, 2: 80, 3: 90, 4: 100 }
    },
    'Bewölkung': {
      'Frühling': { 0: 40, 1: 85, 2: 95, 3: 98, 4: 100 },
      'Sommer': { 0: 80, 1: 90, 2: 100 },
      'Herbst': { 0: 30, 1: 80, 2: 95, 3: 99, 4: 100 },
      'Winter': { 0: 60, 1: 70, 2: 90, 3: 96, 4: 100 }
    }
  },
  '3E': {
    'Temperatur': {
      'Frühling': { 'mild': 60, 'warm': 98, 'heiß': 100 },
      'Sommer': { 'mild': 20, 'warm': 35, 'heiß': 80, 'sehr heiß': 100 },
      'Herbst': { 'kühl': 10, 'mild': 50, 'warm': 95, 'heiß': 100 },
      'Winter': { 'kühl': 25, 'mild': 60, 'warm': 100 }
    },
    'Niederschlag': {
      'Frühling': { 0: 90, 1: 95, 2: 100 },
      'Sommer': { 0: 20, 1: 40, 2: 60, 3: 90, 4: 100 },
      'Herbst': { 0: 90, 1: 97, 2: 100 },
      'Winter': { 0: 95, 1: 100 }
    },
    'Windstärke': {
      'Frühling': { 0: 30, 1: 50, 2: 90, 3: 98, 4: 100 },
      'Sommer': { 0: 60, 1: 80, 2: 95, 3: 100 },
      'Herbst': { 0: 20, 1: 65, 2: 85, 3: 95, 4: 100 },
      'Winter': { 2: 50, 3: 90, 4: 100 }
    },
    'Bewölkung': {
      'Frühling': { 0: 40, 1: 85, 2: 95, 4: 100 },
      'Sommer': { 0: 80, 1: 85, 2: 95, 3: 99, 4: 100 },
      'Herbst': { 0: 30, 1: 80, 2: 95, 3: 100 },
      'Winter': { 0: 60, 1: 70, 2: 90, 3: 100 }
    }
  },
  '4': {
    'Temperatur': {
      'Frühling': { 'mild': 5, 'warm': 70, 'heiß': 95, 'sehr heiß': 100 },
      'Sommer': { 'warm': 50, 'heiß': 90, 'sehr heiß': 100 },
      'Herbst': { 'mild': 5, 'warm': 70, 'heiß': 95, 'sehr  heiß': 100 },
      'Winter': { 'mild': 25, 'warm': 60, 'heiß': 100 }
    },
    'Niederschlag': {
      'Frühling': { 0: 15, 1: 25, 2: 55, 3: 85, 4: 100 },
      'Sommer': { 0: 10, 1: 30, 2: 60, 3: 90, 4: 100 },
      'Herbst': { 0: 15, 1: 20, 2: 50, 3: 80, 4: 100 },
      'Winter': { 0: 10, 1: 40, 2: 70, 3: 90, 4: 100 }
    },
    'Windstärke': {
      'Frühling': { 0: 70, 1: 80, 2: 90, 3: 100 },
      'Sommer': { 0: 90, 1: 95, 2: 97, 3: 99, 4: 100 },
      'Herbst': { 0: 65, 1: 80, 2: 95, 3: 100 },
      'Winter': { 0: 70, 1: 85, 2: 90, 3: 95, 4: 100 }
    },
    'Bewölkung': {
      'Frühling': { 0: 25, 1: 40, 2: 90, 3: 99, 4: 100 },
      'Sommer': { 0: 25, 1: 40, 2: 90, 3: 99, 4: 100 },
      'Herbst': { 0: 25, 1: 40, 2: 90, 3: 99, 4: 100 },
      'Winter': { 0: 25, 1: 40, 2: 90, 3: 99, 4: 100 }
    }
  }
}
