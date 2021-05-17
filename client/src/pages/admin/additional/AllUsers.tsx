import React from 'react';
import {UserCard} from "../../../components/additionalComponents/user-components/UserCard";
import {UserInterface} from "../../../types/types";
import {ButtonManipulate} from "../../../components/additionalComponents/manipulators/ButtonManipulate";
import {deleteUser} from "../../../store/user/userActions";

type AllUsersProps = {
    allUsers:UserInterface[]
}

export const AllUser: React.FC<AllUsersProps> = (
    {
     allUsers
    }) => {
    return (
        <div>
            {allUsers.map(user => (
                <>
                <UserCard
                    userId={user.id}
                    name={user.name}
                    avatar={user.avatar}
                    phoneNumber={user.phoneNumber}
                    city={user.city}
                    info={user.info}
                />
                <ButtonManipulate
                    dispatchFunction={deleteUser}
                    object={user}
                    text="Видалити"
                    type="delete"
                    />
                </>
            ))}
        </div>
    )
}