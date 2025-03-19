
# Pitang back-end trainee

Projeto feito durante o processo de Trainee da pitang. Back-end para um serviço de agendamento de consultas médicas. 

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/LucasSantosFreire/pitang-backend
```

Entre no diretório do projeto

```bash
  cd pitang-backend
```

Instale as dependências

```bash
  yarn install
```

Inicie o servidor

```bash
  yarn run dev
```

obs: necessário instalar o nodemon para rodar localmente.


## Documentação da API

#### Marcar uma consulta

```http
  POST /create_appointment
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. O nome do paciente |
| `birthdate` | `DateTime` | **Obrigatório**. Data de nascimento do paciente |
| `appointmentDate` | `DateTime` | **Obrigatório**. Data para a consulta do paciente |

#### Retorna todas as consultas marcadas

```http
  GET /index
```
#### Atualiza o status de uma consulta

```http
  PUT /update_status/:id
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. id da consulta a ser atualizada |
| `name` | `string` |  O nome do paciente a ser atualizado |
| `birthdate` | `DateTime` |  Data de nascimento do paciente a ser atualizada |
| `appointmentDate` | `DateTime` |  Data para a consulta do paciente a ser atualizada |

obs: ajustar os parâmetros a serem atualizados como necessário.

#### Deleta uma consulta

```http
  DELETE /delete_appointment/:id
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. id da consulta a ser deletada |

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_URL`

