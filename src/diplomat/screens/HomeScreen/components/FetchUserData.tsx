import React from "react";
import { fetchUserDataController, forceErrorController } from "../../../../controllers/customer/customer";
import { useHandlerContext } from "@commons/handler-context";
import { Customer } from "src/domain/customer";
import { CustomError, NotFoundError } from "@commons/errors";

export function FetchUserData() {
  const { withHandlerContext } = useHandlerContext();
  const [user, setUser] = React.useState<Customer | null>(null);

  React.useEffect(() => {
    window.addEventListener("resize", withHandlerContext(async ({
      event
    }) => {
      console.log("Custom Event", event);
    }));
  })

  return (
    <div>
      <button
        style={{
          color: "blue",
        }}
        onClick={withHandlerContext(async () => {
          const data = await fetchUserDataController();
          setUser(data);
        })}
      >
        Fetch user data
      </button>
      <button
        onClick={withHandlerContext(async function onClickUIHandler() {
          await forceErrorController();
        })}
        style={{
          color: "red",
        }}
      >
        Throw Error
      </button>
      <pre>
        <code>
          {JSON.stringify(user, null, 2)}
        </code>
      </pre>
    </div>
  );
}

/*

## Em caso de GET
- useAsyncCall
- Chama o adapter caso precise
- Chama o controller
  - O controller TEM que receber um objeto de domain, se ele receber alguma coisa estruturada
  - Chama o httpClient
    - No HttpClient, roda as validações que já temos hoje e chama um adapter pra converter de `wireIn` pra `DOMAIN`
- Na tela, sempre pegamos o dado de domain e passamos propriedades especificas dos componentes e se possível, passamos a entidade toda pra baixo igual fazemos no back end
  - Isso ajuda a gente a ser mais consistente, em casos de mudanças, adicionar algum atributo novo ou algo do genero. Dado que não temos uma API de Grafo, sempre pegamos a entidade.

## Em caso de POST
- onClick/onChange... 
- Chama o controller
  - O controller TEM que receber um objeto de domain, se ele receber alguma coisa estruturada
    - Lembrar de ter um adapter de wire(tela)ToDomain(), pq o dado que vem da tela, pode não estar estruturado para o domain e precisamos garantir isso validando.
    - Basicamente uma coerção do objeto


// Overview sobre entidades
interface Buyer {
  id: UUID;
}

interface Buyer {
  id: UUID;
  name: string;
}

const buyer: Buyer = {};
// -> No momento da venda, é só um ID
// -> No momento do cadastro, é todos os campos necessários

*/