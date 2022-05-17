export as namespace reducers;

export interface StockState {
  products: models.Product[]
}

export interface LoadingState {
  global: number; // Loading Global
  button: number; // Loading em um Botão
  image: number; // Loading em uma imagem
}

export interface ReduxState {
  loading: LoadingState;
  stock: StockState;
}
