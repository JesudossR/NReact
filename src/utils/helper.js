export function filterData(searchText, restaurants) {
    const filterDatas = restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterDatas;
}
