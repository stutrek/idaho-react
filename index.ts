import { useState, useEffect } from 'react';

import { Machine } from 'idaho';

export function useMachineStateName<StatesT, DataT, FinalT>(
    machine: Machine<StatesT, DataT, FinalT>
) {
    const [stateName, setStateName] = useState(machine.stateName);

    useEffect(() => {
        const listener = () => {
            setStateName(machine.stateName);
        };
        machine.on('statechange', listener);
        return () => {
            machine.off('statechange', listener);
        };
    }, [machine]);

    return stateName;
}

export function useMachineState<StatesT, DataT, FinalT>(machine: Machine<StatesT, DataT, FinalT>) {
    const [state, setStateValue] = useState<StatesT>(machine.state);

    useEffect(() => {
        const listener = () => {
            setStateValue(machine.state);
        };
        machine.on('change', listener);
        return () => {
            machine.off('change', listener);
        };
    }, [machine]);

    return state;
}

export function useMachineData<StatesT, DataT, FinalT>(
    machine: Machine<StatesT, DataT, FinalT>
): DataT {
    const [data, setData] = useState<DataT>(machine.data);

    useEffect(() => {
        const listener = () => {
            setData(machine.data);
        };
        machine.on('datachange', listener);
        return () => {
            machine.off('datachange', listener);
        };
    }, [machine]);

    return data;
}

export function useMachine<StatesT, DataT, FinalT>(
    machine: Machine<StatesT, DataT, FinalT>
): Machine<StatesT, DataT, FinalT> {
    const [counter, triggerUpdate] = useState(0);

    useEffect(() => {
        const listener = () => {
            triggerUpdate(counter + 1);
        };
        machine.on('change', listener);
        return () => {
            machine.off('change', listener);
        };
    }, [machine]);

    return machine;
}
