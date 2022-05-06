import { Text } from "@alura/design-system/components/Text";
import { sum } from "@alura/utils/math/sum";

export function HomeScreen() {
  return (
    <main>
      <Text tag="h1">Home</Text>
      <Text tag="p">
        Importando modulo local: @alura/utils/math/sum sum(2,2): {sum(2, 2)}
      </Text>
    </main>
  );
}
