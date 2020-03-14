import { Machine } from 'idaho';
export declare function useMachineStateName<StatesT, DataT, FinalT>(machine: Machine<StatesT, DataT, FinalT>): keyof StatesT;
export declare function useMachineState<StatesT, DataT, FinalT>(machine: Machine<StatesT, DataT, FinalT>): any;
export declare function useMachineData<StatesT, DataT, FinalT>(machine: Machine<StatesT, DataT, FinalT>): DataT;
export declare function useMachine<StatesT, DataT, FinalT>(machine: Machine<StatesT, DataT, FinalT>): Machine<StatesT, DataT, FinalT>;
