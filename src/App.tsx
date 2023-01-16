import Input from "./components/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

function App() {
  return (
    <>
      <form>
        <h2>Simule sua Antecipação</h2>
        <div>
          <Input name="Informe o valor da venda" />
          <Input name="Em quantas parcelas" />
          <Input name="Informe o percentual de MDR" />
        </div>
        <div>
          <h3>VOCÊ RECEBERÁ:</h3>
          <div>
            <p>Amanhã</p>
            <span>R$ 0,00</span>
          </div>
          <div>
            <p>Em 15 dias</p>
            <span>R$ 0,00</span>
          </div>
          <div>
            <p>Em 30 dias</p>
            <span>R$ 0,00</span>
          </div>
          <div>
            <p>Em 90 dias</p>
            <span>R$ 0,00</span>
          </div>
        </div>
        <button>Calcular</button>
      </form>
    </>
  );
}

export default App;
