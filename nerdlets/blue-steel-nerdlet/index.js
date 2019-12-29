import React from 'react';
import { NerdGraphQuery, EntityByGuidQuery, EntitiesByNameQuery, EntitiesByDomainTypeQuery, EntityCountQuery, Spinner, Stack, StackItem, HeadingText, BlockText, NerdletStateContext } from 'nr1';


// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class BlueSteelNerdletNerdlet extends React.Component {
    render() {
        return (
            <NerdGraphQuery query={`{actor {user {name email}}}`}>
                {({loading, error, data}) => {
                    console.debug([loading, data, error]); //eslint-disable-line
                    return null
                }}
            </NerdGraphQuery>
        )    }
}
