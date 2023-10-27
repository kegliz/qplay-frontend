import { AxiosResponse } from "axios"
import api, { EndPoints } from "../api-client/axios"
import {
  IProgram,
  IProgramIDValue,
} from "../models/program"

export async function saveProgram(
  p: IProgram,
) {
  return await api.post<
    IProgramIDValue,
    AxiosResponse<IProgramIDValue, IProgram>,
    IProgram
  >(EndPoints.programs, p)
}
