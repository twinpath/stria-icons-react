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
const RectangleTerminalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H448C483.346 480 512 451.344 512 416V96C512 60.656 483.346 32 448 32ZM120 368C113.516 368 107.047 365.375 102.312 360.219C93.359 350.437 94.016 335.25 103.781 326.312L180.484 256L103.781 185.688C94.016 176.75 93.359 161.562 102.312 151.781S126.453 141.375 136.219 150.313L232.219 238.313C237.172 242.844 240 249.281 240 256S237.172 269.156 232.219 273.688L136.219 361.688C131.609 365.906 125.797 368 120 368ZM392 384H248C234.75 384 224 373.25 224 360S234.75 336 248 336H392C405.25 336 416 346.75 416 360S405.25 384 392 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M239.995 256C239.995 249.281 237.167 242.844 232.214 238.312L136.214 150.312C126.448 141.375 111.261 142 102.308 151.781S94.011 176.75 103.777 185.688L180.48 256L103.777 326.312C94.011 335.25 93.355 350.437 102.308 360.219C107.042 365.375 113.511 368 119.995 368C125.792 368 131.605 365.906 136.214 361.688L232.214 273.688C237.167 269.156 239.995 262.719 239.995 256ZM391.995 336H247.995C234.745 336 223.995 346.75 223.995 360S234.745 384 247.995 384H391.995C405.245 384 415.995 373.25 415.995 360S405.245 336 391.995 336Z" })
    ]
  }
));
RectangleTerminalDuotone.displayName = "RectangleTerminalDuotone";
var RectangleTerminal_default = RectangleTerminalDuotone;
