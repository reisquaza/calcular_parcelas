import Input from "./components/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { iCalculate } from "./interfaces";
import ApiCalculate from "./services/apiCalculate";
import Global from "./style/Global";
import StyledForm from "./style/Form";
import {
  StyledAntecipation,
  StyledContainer,
  StyledContent,
} from "./style/Container";

function App() {
  const [result1State, setResult1] = useState(0);
  const [result2State, setResult2] = useState(0);
  const [result3State, setResult3] = useState(0);
  const [result4State, setResult4] = useState(0);

  console.log("first");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitFunction = async (formData: iCalculate) => {
    const { data } = await ApiCalculate(formData);

    const values = Object.keys(data).map((key) => data[key]);

    setResult1(values[0]);
    setResult2(values[1]);
    setResult3(values[2]);
    setResult4(values[3]);
  };

  return (
    <>
      <Global />
      <StyledContainer>
        <StyledContent>
          <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Simule sua Antecipação</h2>

            <div>
              <Input
                type="number"
                id="amount"
                title="Informe o valor da venda"
                register={register}
              />
              <Input
                type="number"
                title="Em quantas parcelas"
                id="installments"
                register={register}
              />
              <Input
                type="number"
                id="mdr"
                title="Informe o percentual de MDR"
                register={register}
              />
            </div>

            <button>Calcular</button>
          </StyledForm>
          <div>
            <h3>VOCÊ RECEBERÁ:</h3>
            <StyledAntecipation>
              <p>Amanhã</p>
              <span>R$ {result1State} </span>
            </StyledAntecipation>
            <StyledAntecipation>
              <p>Em 15 dias</p>
              <span>R$ {result2State} </span>
            </StyledAntecipation>
            <StyledAntecipation>
              <p>Em 30 dias</p>
              <span>R$ {result3State} </span>
            </StyledAntecipation>
            <StyledAntecipation>
              <p>Em 90 dias</p>
              <span>R$ {result4State} </span>
            </StyledAntecipation>
          </div>
        </StyledContent>
      </StyledContainer>
    </>
  );
}

export default App;
