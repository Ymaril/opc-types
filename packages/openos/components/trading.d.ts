declare namespace OpenOS {
    interface TradeItemEnchantment {
        level: number,
        label: string,
        name: string
    }

    interface TradeItem {
        damage: number,
        hasTag: boolean,
        label: string,
        enchantments?: TradeItemEnchantment[],
        maxDamage: number,
        maxSize: number,
        name: string,
        size: number
    }
    /**
     * A trade object represents an available trade nearby.
     * @see https://ocdoc.cil.li/component:trading
     * @noSelf
     */
    interface TradeObject {
        /**
         * Returns whether the merchant currently wants to trade this.
         */
        isEnabled(): boolean;

        /**
         * Returns true when trade succeeds and [undefined, error] when not
         * @tupleReturn
         */
        trade(): [boolean | undefined, string?];

        /**
         * Returns the items the merchant wants for this trade.
         * @tupleReturn
         */
        getInput(): TradeItem[];

        /**
         * Returns the item the merchant offers for this trade.
         * @tupleReturn
         */
        getOutput(): TradeItem[];

        /**
         * Returns the id of the merchant that provides this trade.
         * Trades can be grouped by the merchant offering them using this id.
         * The id is created when you call getTrades(), but is consistent as long as
         * the group of available merchants does not change between calls. 
         */
        getMerchantId(): number;
    }

    /**
     * This component is provided by trading upgrades
     * @see https://ocdoc.cil.li/component:trading
     * @noSelf
     */
    interface Trading {
        /**
         * Returns a array of trades in range as userdata objects
         */
        getTrades(): TradeObject[];
    }
}
