import { useState, useEffect } from 'react';
export function useMachineStateName(machine) {
    var _a = useState(machine.stateName), stateName = _a[0], setStateName = _a[1];
    useEffect(function () {
        var listener = function () {
            setStateName(machine.stateName);
        };
        machine.on('statechange', listener);
        return function () {
            machine.off('statechange', listener);
        };
    }, [machine]);
    return stateName;
}
export function useMachineState(machine) {
    var _a = useState(machine.state), state = _a[0], setStateValue = _a[1];
    useEffect(function () {
        var listener = function () {
            setStateValue(machine.state);
        };
        machine.on('change', listener);
        return function () {
            machine.off('change', listener);
        };
    }, [machine]);
    return state;
}
export function useMachineData(machine) {
    var _a = useState(machine.data), data = _a[0], setData = _a[1];
    useEffect(function () {
        var listener = function () {
            setData(machine.data);
        };
        machine.on('datachange', listener);
        return function () {
            machine.off('datachange', listener);
        };
    }, [machine]);
    return data;
}
export function useMachine(machine) {
    var _a = useState(0), counter = _a[0], triggerUpdate = _a[1];
    useEffect(function () {
        var listener = function () {
            triggerUpdate(counter + 1);
        };
        machine.on('change', listener);
        return function () {
            machine.off('change', listener);
        };
    }, [machine]);
    return machine;
}
//# sourceMappingURL=index.js.map