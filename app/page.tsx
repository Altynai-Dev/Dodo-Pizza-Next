import { Title, Container, TopBar, Filters, ProductsGroupList } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Пиццы" items={[
                {
                  id: 1,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                },
                {
                  id: 2,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                },
                {
                  id: 3,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                },
                {
                  id: 4,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                },
                {
                  id: 5,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                },
                {
                  id: 6,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                },
                {
                  id: 7,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                },
                {
                  id: 8,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                }
              ]} categoryId={1} />
              <ProductsGroupList title="Комбо" items={[
                {
                  id: 1,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                },
                {
                  id: 2,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                },
                {
                  id: 3,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                },
                {
                  id: 4,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                },
                {
                  id: 5,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                },
                {
                  id: 6,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                },
                {
                  id: 7,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                },
                {
                  id: 8,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kcddKS0WwWwW46oFqUef1aXVTZWpyotcyA&s",
                  price: 600,
                  items: [{price: 600}]
                }
              ]} categoryId={2} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
