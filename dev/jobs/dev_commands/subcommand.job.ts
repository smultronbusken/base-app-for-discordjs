import { MessageActionRow, MessageButton, MessageSelectMenu } from "discord.js";
import { CommandOptionType, SubCommand } from "../../../src/Jobs";

export default new SubCommand<{}>({
    info: "Subcommand",
    masterCommand: "master",
    name: "sub",
    options: [{
        description: "just a string",
        name: "foobar",
        required: true,
        type: CommandOptionType.String,
        choices: [
            {
                name: "first",
                value: "value"
            }
        ]
    }],
    async execute(interaction, app) {
  		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);
        const row2 = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('select')
                .setPlaceholder('Nothing selected')
                .addOptions([
                    {
                        label: 'Select me',
                        description: 'This is a description',
                        value: 'first_option',
                    },
                    {
                        label: 'You can select me too',
                        description: 'This is also a description',
                        value: 'second_option',
                    },
                ]),
        );
        console.log(row.toJSON())
        console.log(row2.toJSON())

		await interaction.reply({ content: 'Pong!', components: [row, row2] });
    }
})