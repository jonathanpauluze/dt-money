import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 3.500,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>

            <tr>
              <td width="50%">Jogo Switch</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 500,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 3.500,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 3.500,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
