import { fireEvent, render, screen } from "@testing-library/react";
import { ConnectedProfile } from "../ConnectedProfile";
import React from 'react';

describe('ConnectedProfile test', () => {
    it('should render ConnectedProfile', () => {
        render(<ConnectedProfile oldName="bob"></ConnectedProfile>);

        const text = screen.getByText("User Name: bob");
        expect(text).toBeDefined()

    });
});

describe('ConnectedProfileContainer test', () => {
    it('should handle handleChangeName in ConnectedProfileContainer', () => {
        const handleChangeName =jest.fn();
        render(<ConnectedProfile handleChangeName={handleChangeName}></ConnectedProfile>);

        const btn = screen.getByText("Change Name")
        fireEvent(
            btn,
            new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(handleChangeName).toHaveBeenCalledTimes(1);
    })
})