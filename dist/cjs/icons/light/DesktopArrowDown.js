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
var DesktopArrowDown_exports = {};
__export(DesktopArrowDown_exports, {
  default: () => DesktopArrowDown_default
});
module.exports = __toCommonJS(DesktopArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DesktopArrowDownLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 112C203.906 112 199.812 113.562 196.688 116.688C190.438 122.938 190.438 133.063 196.688 139.312L276.688 219.312C282.938 225.562 293.063 225.562 299.312 219.312L379.312 139.312C385.562 133.062 385.562 122.937 379.312 116.688S362.937 110.438 356.688 116.688L304 169.375V16C304 7.156 296.844 0 288 0S272 7.156 272 16V169.375L219.312 116.688C216.188 113.562 212.094 112 208 112ZM512 0H368C359.164 0 352 7.162 352 16C352 24.836 359.164 32 368 32H512C529.674 32 544 46.326 544 64V256H32V64C32 46.326 46.326 32 64 32H208C216.836 32 224 24.836 224 16C224 7.162 216.836 0 208 0H64C28.654 0 0 28.652 0 64V352C0 387.346 28.654 416 64 416H213.693L194.494 480H144C135.164 480 128 487.164 128 496S135.164 512 144 512H432C440.836 512 448 504.836 448 496S440.836 480 432 480H381.506L362.307 416H512C547.346 416 576 387.346 576 352V64C576 28.652 547.346 0 512 0ZM227.906 480L247.105 416H328.895L348.094 480H227.906ZM544 352C544 369.645 529.645 384 512 384H64C46.355 384 32 369.645 32 352V288H544V352Z" })
  }
));
DesktopArrowDownLight.displayName = "DesktopArrowDownLight";
var DesktopArrowDown_default = DesktopArrowDownLight;
