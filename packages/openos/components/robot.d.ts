declare namespace OpenOS {
    /**
     * This component is provided by the Robot.
     * @see https://ocdoc.cil.li/component:robot
     * @noSelf
     */
    interface Robot {
        /**
         * Set the color of the activity(robot) or flap(drone) light to the specified integer encoded RGB value
         */
        setLightColor(value: number): number;
    }
}
