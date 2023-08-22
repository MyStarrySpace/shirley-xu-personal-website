---
title: "Phylactory"
date: Aug 20, 2023
excerpt: Phylactory is a fantasy-themed factory game where the player can not only build a magnificent factory, but also command units (called Thralls) to perform combat and farm resources. I created and animated the pixel art in Asesprite, as well as the in-game UI and assets. Furthermore, I developed a custom Entity-Component System and custom navigation that would allow the player to control hundreds of thousands of units.
cover_image: /images/projects/phylactory/phylactory_banner.png
project_name: phylactory
---
# A Cutting-Edge Factory Fantasy Game

Phylactory is a compelling fusion of factory management and real-time strategy (RTS), set in a vibrant fantasy world. At its core, Phylactory leverages a sophisticated Entity-Component-Space system, enabling the seamless handling of vast numbers of units and intricate factory components. This innovative architecture ensures smooth gameplay and scalability, allowing for complex interactions and vast scenarios.

The game's visual appeal is heightened by meticulously crafted pixel art, including normal and emissive maps, all hand-designed by me. The attention to detail extends to the creation of stunning shaders for atmospheric effects such as rain and underwater dynamics, adding depth and realism to the environment.

But Phylactory is not just about aesthetics; it's a comprehensive factory simulation. From an elaborate inventory management system to advanced navigation and pathfinding algorithms, every aspect is thoughtfully designed. The energy grid system, pipes network, and train system all intertwine to create a rich and engaging gameplay experience, providing players with countless opportunities for strategic thinking and creativity.

With intuitive controls such as drag-click to move, Phylactory offers an accessible yet deep gameplay experience. Whether you're orchestrating a complex manufacturing process or leading your units in strategic maneuvers, Phylactory provides a captivating blend of strategy, simulation, and visual artistry.

As the primary developer and artist, my work on Phylactory represents a synergy of technical prowess and artistic vision. It stands as a testament to innovative artistic design, efficient programming, and a passion for creating engaging virtual worlds.

<video width="640" height="480" controls>
  <source src="/images/projects/phylactory/Phylactory.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

# Entity-Component-Space-System (ECSS) in Phylactory

## Overview
Phylactory utilizes a cutting-edge Entity-Component-Spaces System (ECSS), based on the widely used Entity-Component System (ECS), a modern architectural pattern that forms the backbone of the game's technical infrastructure. With a focus on flexibility, performance, and scalability, the ECSS ensures a robust and efficient foundation for handling complex game mechanics. The custon ECSS solution provides Phylactory with the following:

Scalability: The ECSS's data-oriented design ensures cache-efficient access, allowing Phylactory to smoothly handle large numbers of intricate game objects.

Modularity: The clear distinction between entities, components, spaces, and systems enhances modularity, facilitating easy extensions and modifications to the game.

GPU Acceleration: Certain systems leverage GPU acceleration, demonstrating the ECSS's adaptability to modern hardware and graphics technology. (Details on specific graphical integrations will be discussed later.)

## Key Features
Entities: Entities in Phylactory represent individual game objects such as units, buildings, and factory elements. Rather than containing components, each entity is identified by a unique ID, allowing for streamlined identification and management.

* **Components and ComponentStorage:** Components encapsulate specific attributes or properties of entities, such as position, velocity, and command handling. In the ECSS, component data is efficiently stored in ComponentStorage objects, enabling optimal data access patterns.

* **Spaces:** Spaces in Phylactory provide shared contexts within the game, fostering communication and collaboration between different parts of the system. They enhance organization and allow for seamless access to common data.

* **Systems:** Systems are the heart of the game logic in Phylactory, operating on entities with specific combinations of components. Examples include:

    * **Movement System:** Handles the movement of entities.
    * **Formation Movement System:** Manages group movements, like flocking behavior.
    * **Selection System:** Manages the selection of entities.
    * **Rendering System:** Takes care of rendering entities on the screen.
    * **Command System:** A specialized system that deals with various commands such as movement, attack, and construction.
<br />
<br />

* **Archetypes and Component Groups:** Archetypes group entities with similar components, while Component Groups define the required components for a system to run. These structures contribute to targeted and efficient processing.

# Other Gameplay And Artistic Contributions:

In addition to the core architecture and mechanics of Phylactory, my work on the game extended into a multitude of specialized systems, each contributing to a rich and engaging gameplay experience:

* **Pipes:** I developed a sophisticated pipes network that dynamically updates when pipes are placed together. It includes logic to calculate flow through pipes, ensuring realistic fluid movement and interactions within the game's factory environment.

* **Energy Network ("Wumbo"):** Named "Wumbo" in the game, this energy network features a pump powering a Wumbo generator, which in turn supplies energy to various buildings. The system's complexity mirrors real-world energy distribution, offering an immersive gameplay experience.

<video width="640" height="480" controls>
  <source src="/images/projects/phylactory/Wumbo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

* **Trains:** I designed and implemented a comprehensive train system that allows for the creation, movement, and management of trains along tracks, complete with strategically placed stops. This system enhances transportation and logistics within the game, adding layers of strategy and planning.

* **Visual Shaders for Underwater Entry:** My artistic talents were put to use in crafting visual shaders for underwater entry effects. These shaders contribute to the visual allure of the game, providing lifelike transitions as objects enter the underwater environment.

* **Particle System for Rain:** I engineered a particle system to simulate rain, creating atmospheric weather effects that add depth and realism to the game world. The system is optimized for performance, ensuring that even large-scale weather patterns do not hinder the game's responsiveness.

* **Skill Tree:** I designed a comprehensive skill tree system that allows players to unlock and enhance abilities, promoting progression and customization. The skill tree fosters strategic thinking and offers multiple pathways for character development, adding replay value to the game.

* **Inventory:** A robust inventory system was implemented to manage and organize in-game items, resources, and equipment. This system supports categorization, stacking, and filtering, enhancing user interaction and offering a seamless inventory management experience.

* **Grid-Based Placement:** I developed a grid-based placement system that enables precise positioning of buildings, units, and other game objects. It ensures alignment and adherence to the game's spatial rules, promoting consistency and visual appeal.

* **Formations:** A highly versatile formation system was crafted to allow units to be arranged in various formations, including huddles, lines, and checkerboard patterns. With adjustable parameters such as spacing and direction, this system provides players with tactical control over unit organization and movement.

<video width="640" height="480" controls>
  <source src="/images/projects/phylactory/FormationsSystem.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Alongside the technical accomplishments in Phylactory, my creative contributions further elevated the game's aesthetic and storytelling appeal:

* **Tilesets and Sprites:** I crafted detailed and visually appealing tilesets that define the game's terrain and environment. The sprites, complete with animation, bring characters and objects to life, infusing the game with personality and charm.

* **Lore Book (Lorenomicon):** A rich lore book was created to deepen the game's narrative. It weaves together backstory and insights through an interactive interface, enriching the game's world and providing context and immersion for the player.

<video width="640" height="480" controls>
  <source src="/images/projects/phylactory/Lorenomicon.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

* **Crafting System:** I designed and implemented a comprehensive crafting system that allows players to create and upgrade items. This falls in line with the factory game aspect, where players can create items and resources to progress through the game.

<video width="640" height="480" controls>
  <source src="/images/projects/phylactory/CraftingGUI.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

* **Day-Night Cycle with Dynamic, Normal-Based Lighting:** A sophisticated day-night cycle was implemented, complete with dynamic, normal-based lighting. This system simulates realistic lighting conditions, casting shadows and reflections that adapt to the time of day. The result is a visually stunning environment that responds and evolves as gameplay progresses.

The Phylactory Project - The Creation of the Wizard & Tomey:

The Phylactory project presented an opportunity to explore a rich fantasy world, where the creation of the Wizard character and his tome familiar, Tomey, became a central focus. The journey to bring these characters to life was both challenging and rewarding, marked by intense exploration, creativity, and refinement.

## The Wizard - A Journey Through Iterations:

The initial phase involved understanding the Wizard's role within the Phylactory world. His character needed to encapsulate wisdom, mystery, power, and a touch of enigma. Hundreds of iterations were created in Asesprite; several are shown below.

![Wizard and Tomey Sketches](/images/projects/phylactory/wizard_iterations.png) 

After exhaustive exploration, the final design emerged as a true embodiment of the Wizard's character. Every pixel was fine-tuned to perfection, and the color pallete was used to define not only the character itself, but provide inspiration throughout the game's development.

## Tomey - The Wizard's Faithful Familiar:
Conceptualizing Tomey: Tomey, the Wizard's tome familiar, needed to be more than an accessory. It had to possess a character of its own, reflecting both magical knowledge and a connection to the Wizard. The relationship between the Wizard and Tomey was vital. Their interaction, expressions, and positioning were designed to convey a deep bond, where Tomey was not just a tool but a companion. The final design of Tomey complemented the Wizard's appearance, creating a harmonious duo that resonated with the magical theme of Phylactory.

![Wizard and Tomey](/images/projects/phylactory/TomeyAndWizard.png) 