import Phaser from "phaser";

// Draws a closed polygon with the path API (fillPoints needs Vector2 instances).
function fillPoly(g: Phaser.GameObjects.Graphics, pts: { x: number; y: number }[]) {
  g.beginPath();
  g.moveTo(pts[0]!.x, pts[0]!.y);
  for (const p of pts.slice(1)) g.lineTo(p.x, p.y);
  g.closePath();
  g.fillPath();
}

export class TextureGenerator {
  static generateAll(scene: Phaser.Scene) {
    const g = scene.add.graphics();

    // ── FIRE SPRITE (28×36): flame-shaped, no face ───────────────────────
    // Texture key stays "fireboy" so level/scene code is unchanged.
    g.fillStyle(0xff4b12, 1);
    fillPoly(g, [
      { x: 14, y: 0 }, { x: 22, y: 12 }, { x: 25, y: 22 },
      { x: 22, y: 31 }, { x: 14, y: 35 }, { x: 6, y: 31 },
      { x: 3, y: 22 }, { x: 6, y: 12 },
    ]);
    g.fillStyle(0xff9a1f, 1);
    fillPoly(g, [
      { x: 14, y: 10 }, { x: 19, y: 20 }, { x: 19, y: 29 },
      { x: 14, y: 33 }, { x: 9, y: 29 }, { x: 9, y: 20 },
    ]);
    g.fillStyle(0xffe066, 1);
    fillPoly(g, [
      { x: 14, y: 20 }, { x: 17, y: 27 }, { x: 14, y: 31 }, { x: 11, y: 27 },
    ]);
    g.fillStyle(0xffffff, 0.6);
    g.fillCircle(11, 13, 1.5);
    g.fillCircle(18, 17, 1);
    g.generateTexture("fireboy", 28, 36);
    g.clear();

    // ── ICE SPRITE (28×36): faceted crystal, no face ─────────────────────
    // Texture key stays "watergirl" so level/scene code is unchanged.
    g.fillStyle(0x66d9f5, 1);
    fillPoly(g, [
      { x: 14, y: 0 }, { x: 24, y: 9 }, { x: 24, y: 27 },
      { x: 14, y: 36 }, { x: 4, y: 27 }, { x: 4, y: 9 },
    ]);
    g.fillStyle(0x3aaee0, 1);
    fillPoly(g, [
      { x: 14, y: 0 }, { x: 4, y: 9 }, { x: 4, y: 27 }, { x: 14, y: 18 },
    ]);
    g.fillStyle(0xd8f8ff, 1);
    fillPoly(g, [
      { x: 14, y: 0 }, { x: 24, y: 9 }, { x: 24, y: 27 }, { x: 14, y: 18 },
    ]);
    g.lineStyle(1, 0xffffff, 0.7);
    g.lineBetween(14, 0, 14, 36);
    g.lineBetween(4, 9, 24, 27);
    g.lineBetween(24, 9, 4, 27);
    g.fillStyle(0xffffff, 0.9);
    g.fillRect(8, 8, 2, 2);
    g.fillRect(19, 26, 2, 2);
    g.generateTexture("watergirl", 28, 36);
    g.clear();

    // ── PLATFORM (200×16) ────────────────────────────────────────────────
    g.fillStyle(0x5a6a78, 1);
    g.fillRect(0, 0, 200, 16);
    g.fillStyle(0x6b7d8c, 1);
    g.fillRect(2, 2, 196, 6);
    g.fillStyle(0x4a5a68, 1);
    g.fillRect(0, 12, 200, 4);
    g.lineStyle(1, 0x3d4f5c, 0.5);
    for (let x = 40; x < 200; x += 40) g.lineBetween(x, 0, x, 16);
    g.generateTexture("platform", 200, 16);
    g.clear();

    // ── WATER HAZARD (200×10) ────────────────────────────────────────────
    g.fillStyle(0x1155cc, 0.92);
    g.fillRect(0, 0, 200, 10);
    g.fillStyle(0x3388ff, 0.65);
    g.fillRect(0, 0, 200, 4);
    g.fillStyle(0x88ccff, 0.45);
    for (let x = 10; x < 200; x += 28) g.fillEllipse(x, 3, 14, 4);
    g.generateTexture("waterBlock", 200, 10);
    g.clear();

    // ── LAVA HAZARD (200×10) ─────────────────────────────────────────────
    g.fillStyle(0xcc2200, 0.92);
    g.fillRect(0, 0, 200, 10);
    g.fillStyle(0xff6600, 0.7);
    g.fillRect(0, 0, 200, 4);
    g.fillStyle(0xffcc00, 0.55);
    for (let x = 14; x < 200; x += 32) g.fillEllipse(x, 3, 16, 5);
    g.generateTexture("lavaBlock", 200, 10);
    g.clear();

    // ── GOAL FIRE DOOR (60×80) ───────────────────────────────────────────
    g.fillStyle(0x442200, 1);
    g.fillRect(0, 0, 60, 80);
    g.fillStyle(0xff6600, 0.35);
    g.fillRect(3, 3, 54, 74);
    g.lineStyle(2.5, 0xff8800, 1);
    g.strokeRect(0, 0, 60, 80);
    g.fillStyle(0xffcc00, 0.8);
    g.fillTriangle(10, 74, 18, 44, 26, 68);
    g.fillTriangle(22, 74, 30, 32, 38, 62);
    g.fillTriangle(33, 74, 41, 48, 49, 74);
    g.fillStyle(0xffffff, 0.6);
    g.fillTriangle(16, 68, 22, 50, 28, 64);
    g.generateTexture("goalFire", 60, 80);
    g.clear();

    // ── GOAL WATER DOOR (60×80) ──────────────────────────────────────────
    g.fillStyle(0x002244, 1);
    g.fillRect(0, 0, 60, 80);
    g.fillStyle(0x0044aa, 0.35);
    g.fillRect(3, 3, 54, 74);
    g.lineStyle(2.5, 0x0088ff, 1);
    g.strokeRect(0, 0, 60, 80);
    g.fillStyle(0x55aaff, 0.7);
    g.fillTriangle(16, 18, 30, 52, 44, 18);
    g.fillStyle(0x88ddff, 0.5);
    g.fillTriangle(21, 24, 30, 46, 39, 24);
    g.fillStyle(0x3399ff, 0.5);
    g.fillEllipse(30, 62, 26, 14);
    g.generateTexture("goalWater", 60, 80);
    g.clear();

    // ── GEM (24×22) ──────────────────────────────────────────────────────
    g.fillStyle(0xffee22, 1);
    g.fillTriangle(7, 4, 12, 1, 17, 4);
    g.fillRect(2, 4, 20, 10);
    g.fillTriangle(2, 14, 12, 26, 22, 14);
    g.fillStyle(0xffffff, 0.5);
    g.fillTriangle(8, 4, 12, 2, 16, 4);
    g.fillTriangle(8, 4, 8, 14, 12, 9);
    g.generateTexture("gem", 24, 26);
    g.clear();

    g.destroy();
  }
}
