# Exercício Prático — Aula 03

**Nome:** Matheus Araujo de Azevedo   **Data:** 09/08/2026

Partindo da tela de lista de produtos da Loja Compre Bem construída em sala, acrescente por conta própria uma prop nova e um estado novo ao componente `ProdutoItem`.

**1. Qual prop nova você acrescentou ao `ProdutoItem`, e o que ela representa:**

Foi acrescentado a prop categoria ao ProdutoItem. Ela representa a categoria do produto, como Móveis ou Iluminação. Esse valor é recebido de fora do componente e apenas exibido.

**2. Qual estado novo você acrescentou, e o que muda quando ele é atualizado:**

Foi acrescentado o estado quantidade. Ele começa com o valor 1 e pode ser alterado pelos botões de aumentar e diminuir a quantidade.

**3. Por que você decidiu que cada dado era prop (vem de fora, só leitura) ou estado (o componente controla e muda com o tempo):**

A categoria é uma prop porque é uma informação recebida pelo produto e que não é alterada pelo componente. A quantidade é um estado porque pode mudar durante a interação do usuário.

**4. Cole aqui o código da sua extensão do `ProdutoItem`:**

function ProdutoItem({ produto, categoria }) {
  const [quantidade, setQuantidade] = useState(1);

  return (
    <View style={styles.item}>
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text>{categoria}</Text>
      <Text style={styles.preco}>{produto.preco}</Text>

      <View style={styles.quantidade}>
        <Button
          title="-"
          onPress={() =>
            setQuantidade(Math.max(1, quantidade - 1))
          }
        />

        <Text style={styles.numero}>
          Quantidade: {quantidade}
        </Text>

        <Button
          title="+"
          onPress={() => setQuantidade(quantidade + 1)}
        />
      </View>
    </View>
  );
}