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
var TruckMoving_exports = {};
__export(TruckMoving_exports, {
  default: () => TruckMoving_default
});
module.exports = __toCommonJS(TruckMoving_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckMovingDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 352C44.654 352 16 380.652 16 416C16 451.346 44.654 480 80 480S144 451.346 144 416C144 380.652 115.346 352 80 352ZM240 352C204.654 352 176 380.652 176 416C176 451.346 204.654 480 240 480S304 451.346 304 416C304 380.652 275.346 352 240 352ZM528 352C492.654 352 464 380.652 464 416C464 451.346 492.654 480 528 480S592 451.346 592 416C592 380.652 563.346 352 528 352Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M621.262 237.262L562.75 178.75C550.824 166.824 534.65 160.125 517.785 160.125H480V96C480 60.652 451.346 32 416 32H64C28.654 32 0 60.652 0 96V363.053C17.191 337.131 46.566 320 80 320S142.809 337.131 160 363.053C177.191 337.131 206.566 320 240 320C281.738 320 316.896 346.799 330.121 384H437.879C451.104 346.799 486.262 320 528 320S604.896 346.799 618.121 384H624C632.75 384 640 376.75 640 368V282.5C640 265.531 633.26 249.26 621.262 237.262ZM480 256V208H517.5C521.75 208 525.75 209.75 528.75 212.75L572.125 256H480Z" })
    ]
  }
));
TruckMovingDuotone.displayName = "TruckMovingDuotone";
var TruckMoving_default = TruckMovingDuotone;
