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
var BoxCheck_exports = {};
__export(BoxCheck_exports, {
  default: () => BoxCheck_default
});
module.exports = __toCommonJS(BoxCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxCheckLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M442.932 162.084L391.148 58.529C383.018 42.27 366.398 32 348.219 32H99.781C81.596 32 64.973 42.273 56.84 58.539L5.066 162.086C1.734 168.75 0 176.098 0 183.547V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V183.547C448 176.096 446.266 168.748 442.932 162.084ZM240 64H348.219C354.344 64 359.812 67.375 362.531 72.844L406.109 160H240V64ZM85.469 72.828C88.188 67.375 93.656 64 99.781 64H208V160H41.889L85.469 72.828ZM416 416C416 433.674 401.674 448 384 448H64C46.326 448 32 433.674 32 416V192H416V416ZM186.031 379.312C189.156 382.438 193.25 384 197.344 384S205.531 382.438 208.656 379.312L315.312 272.641C321.562 266.391 321.562 256.266 315.312 250.016S298.937 243.766 292.688 250.016L197.344 345.375L155.312 303.359C149.062 297.109 138.937 297.109 132.688 303.359S126.438 319.734 132.688 325.984L186.031 379.312Z" })
  }
));
BoxCheckLight.displayName = "BoxCheckLight";
var BoxCheck_default = BoxCheckLight;
