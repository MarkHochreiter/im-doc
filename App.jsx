import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronLeft, ChevronRight, Home, Gamepad2, Map, Trophy, Settings } from 'lucide-react'
import './App.css'

// Import assets
import manualCover from './assets/xhqZWuzc87lt.jpg'
import paperTexture from './assets/ovlI2YiE1aRJ.jpg'

function App() {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    {
      id: 'cover',
      title: 'Game Manual',
      component: <CoverPage />
    },
    {
      id: 'contents',
      title: 'Table of Contents',
      component: <ContentsPage />
    },
    {
      id: 'story',
      title: 'The Story',
      component: <StoryPage />
    },
    {
      id: 'controls',
      title: 'Controls',
      component: <ControlsPage />
    },
    {
      id: 'gameplay',
      title: 'How to Play',
      component: <GameplayPage />
    },
    {
      id: 'characters',
      title: 'Characters',
      component: <CharactersPage />
    },
    {
      id: 'items',
      title: 'Items & Power-ups',
      component: <ItemsPage />
    },
    {
      id: 'maps',
      title: 'World Maps',
      component: <MapsPage />
    }
  ]

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="nintendo-manual">
      {/* Navigation */}
      <nav className="manual-nav">
        <Button 
          onClick={prevPage} 
          disabled={currentPage === 0}
          className="nav-btn"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>
        
        <div className="page-indicator">
          Page {currentPage + 1} of {pages.length}
        </div>
        
        <Button 
          onClick={nextPage} 
          disabled={currentPage === pages.length - 1}
          className="nav-btn"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </nav>

      {/* Page Content */}
      <main className="manual-page">
        {pages[currentPage].component}
      </main>

      {/* Page Navigation Dots */}
      <div className="page-dots">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`page-dot ${index === currentPage ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

// Cover Page Component
function CoverPage() {
  return (
    <div className="cover-page">
      <div className="cover-content">
        <div className="nintendo-logo">
          <span className="nintendo-text">Nintendo</span>
          <span className="entertainment-system">Entertainment System</span>
        </div>
        
        <div className="game-title">
          <h1>SUPER ADVENTURE QUEST</h1>
          <div className="subtitle">Official Game Manual</div>
        </div>
        
        <div className="cover-art">
          <div className="pixel-hero"></div>
        </div>
        
        <div className="manual-info">
          <div className="info-box">
            <div className="players">1-2 Players</div>
            <div className="age-rating">Ages 6+</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Table of Contents Component
function ContentsPage() {
  const contents = [
    { page: 3, title: "The Story", icon: <Home className="w-4 h-4" /> },
    { page: 4, title: "Controls", icon: <Gamepad2 className="w-4 h-4" /> },
    { page: 5, title: "How to Play", icon: <Settings className="w-4 h-4" /> },
    { page: 6, title: "Characters", icon: <Trophy className="w-4 h-4" /> },
    { page: 7, title: "Items & Power-ups", icon: <Trophy className="w-4 h-4" /> },
    { page: 8, title: "World Maps", icon: <Map className="w-4 h-4" /> }
  ]

  return (
    <div className="contents-page">
      <h2 className="page-title">Table of Contents</h2>
      <div className="contents-list">
        {contents.map((item, index) => (
          <div key={index} className="contents-item">
            <div className="item-info">
              {item.icon}
              <span className="item-title">{item.title}</span>
            </div>
            <div className="page-dots-line"></div>
            <div className="page-number">{item.page}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Story Page Component
function StoryPage() {
  return (
    <div className="story-page">
      <h2 className="page-title">The Story</h2>
      <div className="story-content">
        <div className="story-text">
          <p>
            In the peaceful kingdom of Pixelland, darkness has fallen upon the land. 
            The evil Shadow King has stolen the seven Crystal Gems that maintain 
            balance in the world.
          </p>
          <p>
            As the brave hero Alex, you must journey through eight challenging 
            worlds to recover the stolen gems and restore peace to the kingdom. 
            Armed with your trusty sword and magical abilities, face dangerous 
            enemies and solve ancient puzzles.
          </p>
          <p>
            Your quest will take you through mystical forests, treacherous 
            mountains, underwater caverns, and the Shadow King's dark castle. 
            Only by collecting all seven Crystal Gems can you defeat the Shadow 
            King and save Pixelland!
          </p>
        </div>
        <div className="story-illustration">
          <div className="pixel-scene"></div>
        </div>
      </div>
    </div>
  )
}

// Controls Page Component
function ControlsPage() {
  return (
    <div className="controls-page">
      <h2 className="page-title">Controls</h2>
      <div className="controls-content">
        <div className="controller-diagram">
          <div className="nes-controller">
            <div className="dpad">
              <div className="dpad-center"></div>
              <div className="dpad-up">↑</div>
              <div className="dpad-down">↓</div>
              <div className="dpad-left">←</div>
              <div className="dpad-right">→</div>
            </div>
            <div className="action-buttons">
              <div className="button-a">A</div>
              <div className="button-b">B</div>
            </div>
            <div className="start-select">
              <div className="select-btn">SELECT</div>
              <div className="start-btn">START</div>
            </div>
          </div>
        </div>
        <div className="controls-list">
          <div className="control-item">
            <span className="control-input">D-Pad</span>
            <span className="control-action">Move Alex in 8 directions</span>
          </div>
          <div className="control-item">
            <span className="control-input">A Button</span>
            <span className="control-action">Jump / Confirm selection</span>
          </div>
          <div className="control-item">
            <span className="control-input">B Button</span>
            <span className="control-action">Attack with sword / Run (hold)</span>
          </div>
          <div className="control-item">
            <span className="control-input">START</span>
            <span className="control-action">Pause game / Open menu</span>
          </div>
          <div className="control-item">
            <span className="control-input">SELECT</span>
            <span className="control-action">Switch between items</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Gameplay Page Component
function GameplayPage() {
  return (
    <div className="gameplay-page">
      <h2 className="page-title">How to Play</h2>
      <div className="gameplay-content">
        <div className="gameplay-section">
          <h3>Basic Movement</h3>
          <p>Use the D-Pad to move Alex around the screen. Press and hold the B button while moving to run faster.</p>
        </div>
        
        <div className="gameplay-section">
          <h3>Combat</h3>
          <p>Press the B button to swing your sword. Different enemies require different strategies to defeat.</p>
        </div>
        
        <div className="gameplay-section">
          <h3>Collecting Items</h3>
          <p>Walk over items to collect them. Use the SELECT button to cycle through your inventory.</p>
        </div>
        
        <div className="gameplay-section">
          <h3>Health System</h3>
          <p>Alex starts with 3 hearts. Touching enemies or hazards will reduce your health. Find heart containers to restore health.</p>
        </div>
        
        <div className="tips-box">
          <h4>Pro Tips!</h4>
          <ul>
            <li>Look for hidden passages behind walls</li>
            <li>Some enemies drop valuable items when defeated</li>
            <li>Save your game at save points before challenging areas</li>
            <li>Experiment with different item combinations</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// Characters Page Component
function CharactersPage() {
  const characters = [
    {
      name: "Alex",
      description: "The brave hero of Pixelland. Armed with a magical sword and determination to save the kingdom.",
      type: "Hero"
    },
    {
      name: "Princess Luna",
      description: "The wise ruler of Pixelland who guides Alex on his quest with ancient knowledge.",
      type: "Ally"
    },
    {
      name: "Shadow King",
      description: "The evil villain who has stolen the Crystal Gems and plunged the world into darkness.",
      type: "Boss"
    },
    {
      name: "Goblin Warrior",
      description: "Common enemies found throughout the kingdom. They attack with clubs and move in patterns.",
      type: "Enemy"
    }
  ]

  return (
    <div className="characters-page">
      <h2 className="page-title">Characters</h2>
      <div className="characters-grid">
        {characters.map((character, index) => (
          <div key={index} className="character-card">
            <div className="character-sprite"></div>
            <div className="character-info">
              <h3>{character.name}</h3>
              <div className="character-type">{character.type}</div>
              <p>{character.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Items Page Component
function ItemsPage() {
  const items = [
    { name: "Crystal Gem", description: "Magical gems that restore balance to the world. Collect all seven!" },
    { name: "Heart Container", description: "Restores Alex's health completely and increases maximum health." },
    { name: "Magic Sword", description: "A powerful weapon that can defeat even the strongest enemies." },
    { name: "Shield", description: "Protects Alex from enemy attacks and projectiles." },
    { name: "Boots of Speed", description: "Allows Alex to move faster and jump higher." },
    { name: "Key", description: "Opens locked doors and treasure chests throughout the kingdom." }
  ]

  return (
    <div className="items-page">
      <h2 className="page-title">Items & Power-ups</h2>
      <div className="items-grid">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <div className="item-sprite"></div>
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Maps Page Component
function MapsPage() {
  return (
    <div className="maps-page">
      <h2 className="page-title">World Maps</h2>
      <div className="maps-content">
        <div className="world-map">
          <div className="map-grid">
            {Array.from({ length: 64 }, (_, i) => (
              <div key={i} className={`map-tile ${i % 8 === 0 ? 'path' : 'grass'}`}></div>
            ))}
          </div>
        </div>
        <div className="map-legend">
          <h3>Map Legend</h3>
          <div className="legend-item">
            <div className="legend-color path"></div>
            <span>Path</span>
          </div>
          <div className="legend-item">
            <div className="legend-color grass"></div>
            <span>Grass</span>
          </div>
          <div className="legend-item">
            <div className="legend-color water"></div>
            <span>Water</span>
          </div>
          <div className="legend-item">
            <div className="legend-color mountain"></div>
            <span>Mountain</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

