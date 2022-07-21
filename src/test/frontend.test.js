import AddActivity from '../components/Activities/AddActivity'

it('Debería renderizar un input con la propiedad "name" igual a "name"', () => {
    expect(AddActivity.find('input[name="name"]')).toHaveLength(1);
  });

  it('Debería renderizar un input con la propiedad "name" igual a "dificulty"', () => {
    expect(AddActivity.find('input[name="dificulty"]')).toHaveLength(1);
  });

  it('Debería renderizar un input con la propiedad "name" igual a "duration"', () => {
    expect(AddActivity.find('input[name="duration"]')).toHaveLength(1);
  });

  it('Debería renderizar un input con la propiedad "name" igual a "season"', () => {
    expect(AddActivity.find('select[name="season"]')).toHaveLength(1);
  });