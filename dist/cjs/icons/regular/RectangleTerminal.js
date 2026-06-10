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
var RectangleTerminal_exports = {};
__export(RectangleTerminal_exports, {
  default: () => RectangleTerminal_default
});
module.exports = __toCommonJS(RectangleTerminal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RectangleTerminalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H448C483.346 480 512 451.344 512 416V96C512 60.656 483.346 32 448 32ZM464 416C464 424.824 456.822 432 448 432H64C55.178 432 48 424.824 48 416V96C48 87.176 55.178 80 64 80H448C456.822 80 464 87.176 464 96V416ZM240 256C240 249.281 237.172 242.844 232.219 238.312L136.219 150.312C126.453 141.375 111.266 142 102.312 151.781S94.016 176.75 103.781 185.688L180.484 256L103.781 326.312C94.016 335.25 93.359 350.437 102.312 360.219C107.047 365.375 113.516 368 120 368C125.797 368 131.609 365.906 136.219 361.688L232.219 273.688C237.172 269.156 240 262.719 240 256ZM392 336H248C234.75 336 224 346.75 224 360S234.75 384 248 384H392C405.25 384 416 373.25 416 360S405.25 336 392 336Z" })
  }
));
RectangleTerminalRegular.displayName = "RectangleTerminalRegular";
var RectangleTerminal_default = RectangleTerminalRegular;
