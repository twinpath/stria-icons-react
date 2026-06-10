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
var CurlingStone_exports = {};
__export(CurlingStone_exports, {
  default: () => CurlingStone_default
});
module.exports = __toCommonJS(CurlingStone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CurlingStoneLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 224V208C480 181.531 458.469 160 432 160H192V112C192 85.531 213.531 64 240 64H400C408.844 64 416 56.844 416 48S408.844 32 400 32H240C195.875 32 160 67.875 160 112V160H144C117.531 160 96 181.531 96 208V224C42.98 224 0 266.98 0 320V384C0 437.02 42.98 480 96 480H480C533.02 480 576 437.02 576 384V320C576 266.98 533.02 224 480 224ZM128 208C128 199.188 135.188 192 144 192H432C440.812 192 448 199.188 448 208V224H128V208ZM96 256H480C515.289 256 544 284.709 544 320V336H32V320C32 284.709 60.711 256 96 256ZM480 448H96C60.711 448 32 419.289 32 384V368H544V384C544 419.289 515.289 448 480 448Z" })
  }
));
CurlingStoneLight.displayName = "CurlingStoneLight";
var CurlingStone_default = CurlingStoneLight;
