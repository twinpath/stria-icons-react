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
var GameConsoleHandheld_exports = {};
__export(GameConsoleHandheld_exports, {
  default: () => GameConsoleHandheld_default
});
module.exports = __toCommonJS(GameConsoleHandheld_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GameConsoleHandheldDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 0H48C21.6 0 0 21.602 0 48V464C0 490.398 21.6 512 48 512H256C326.693 512 384 454.691 384 384V48C384 21.602 362.4 0 336 0ZM160 344C160 348.375 156.375 352 152 352H128V376C128 380.375 124.375 384 120 384H104C99.625 384 96 380.375 96 376V352H72C67.625 352 64 348.375 64 344V328C64 323.625 67.625 320 72 320H96V296C96 291.625 99.625 288 104 288H120C124.375 288 128 291.625 128 296V320H152C156.375 320 160 323.625 160 328V344ZM232 384C218.75 384 208 373.25 208 360S218.75 336 232 336S256 346.75 256 360S245.25 384 232 384ZM112 224C103.125 224 96 216.875 96 208V80C96 71.125 103.125 64 112 64H272C280.875 64 288 71.125 288 80V192C288 209.625 273.625 224 256 224H112ZM296 336C282.75 336 272 325.25 272 312S282.75 288 296 288S320 298.75 320 312S309.25 336 296 336Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 80V192C288 209.625 273.625 224 256 224H112C103.125 224 96 216.875 96 208V80C96 71.125 103.125 64 112 64H272C280.875 64 288 71.125 288 80Z" })
    ]
  }
));
GameConsoleHandheldDuotone.displayName = "GameConsoleHandheldDuotone";
var GameConsoleHandheld_default = GameConsoleHandheldDuotone;
