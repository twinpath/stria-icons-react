var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Dungeon_exports = {};
__export(Dungeon_exports, {
  default: () => Dungeon_default
});
module.exports = __toCommonJS(Dungeon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DungeonSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128.75 195.375L45.875 143.5C37.875 138.5 26.875 141.375 23 150C10.125 178.125 2.5 208.375 0.5 239.25C0 248.375 7.625 256 16.75 256H113.875C121.75 256 127.875 249.75 128.875 241.875C129.875 232.5 132.125 223.5 135.125 214.875C137.625 207.5 135.375 199.5 128.75 195.375ZM319 8C298.875 2.875 277.75 0 256 0S213.125 2.875 193 8C183.75 10.375 179 20.625 182.625 29.375L220 133.375C222.375 139.75 228.375 144 235.125 144H276.875C283.625 144 289.625 139.75 292 133.375L329.375 29.375C333 20.625 328.25 10.375 319 8ZM112 288H16C7.125 288 0 295.125 0 304V368C0 376.875 7.125 384 16 384H112C120.875 384 128 376.875 128 368V304C128 295.125 120.875 288 112 288ZM112 416H16C7.125 416 0 423.125 0 432V496C0 504.875 7.125 512 16 512H112C120.875 512 128 504.875 128 496V432C128 423.125 120.875 416 112 416ZM189.25 132.375L153 41.5C149.5 32.75 138.875 28.5 130.625 33.25C103.25 48.625 79 69 59 93.125C52.875 100.375 55.125 111.625 63.125 116.625L146.125 168.5C152.625 172.5 160.75 171.125 166.25 165.625C171.375 160.5 177 155.875 183 151.625C189.25 147.25 192.125 139.5 189.25 132.375ZM398.125 256H495.25C504.375 256 512 248.375 511.5 239.25C509.5 208.375 501.875 178.125 489 150C485.125 141.375 474.125 138.5 466.125 143.5L383.25 195.375C376.625 199.5 374.375 207.5 376.875 214.875C380 223.5 382.125 232.5 383.125 241.875C384.125 249.75 390.25 256 398.125 256ZM453 93.125C433 69 408.75 48.625 381.375 33.25C373.125 28.5 362.5 32.75 359 41.5L322.625 132.375C319.875 139.5 322.75 147.25 329 151.625C335 155.75 340.625 160.5 345.75 165.625C351.25 171.125 359.375 172.5 365.875 168.5L448.75 116.625C456.875 111.625 459.125 100.375 453 93.125ZM496 288H400C391.125 288 384 295.125 384 304V368C384 376.875 391.125 384 400 384H496C504.875 384 512 376.875 512 368V304C512 295.125 504.875 288 496 288ZM496 416H400C391.125 416 384 423.125 384 432V496C384 504.875 391.125 512 400 512H496C504.875 512 512 504.875 512 496V432C512 423.125 504.875 416 496 416ZM240 177.625V472C240 476.375 243.625 480 248 480H264C268.375 480 272 476.375 272 472V177.625C266.75 176.75 261.5 176 256 176S245.25 176.75 240 177.625ZM176 219.125V472C176 476.375 179.625 480 184 480H200C204.375 480 208 476.375 208 472V189.375C195.25 196.75 184.125 206.875 176 219.125ZM304 189.375V472C304 476.375 307.625 480 312 480H328C332.375 480 336 476.375 336 472V219.125C327.875 206.875 316.75 196.75 304 189.375Z" })
  }
));
DungeonSolid.displayName = "DungeonSolid";
var Dungeon_default = DungeonSolid;
