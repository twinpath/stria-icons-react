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
var SquareShareNodes_exports = {};
__export(SquareShareNodes_exports, {
  default: () => SquareShareNodes_default
});
module.exports = __toCommonJS(SquareShareNodes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareShareNodesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM320 224C355.346 224 384 195.346 384 160S355.346 96 320 96S256 124.654 256 160C256 164.596 256.529 169.061 257.451 173.383L176.021 214.1C164.289 200.666 147.236 192 128 192C92.654 192 64 220.654 64 256S92.654 320 128 320C147.236 320 164.289 311.334 176.021 297.9L257.451 338.617C256.529 342.939 256 347.404 256 352C256 387.346 284.654 416 320 416S384 387.346 384 352S355.346 288 320 288C300.764 288 283.711 296.666 271.979 310.1L190.549 269.383C191.471 265.061 192 260.596 192 256S191.471 246.939 190.549 242.617L271.979 201.9C283.711 215.334 300.764 224 320 224ZM320 128C337.645 128 352 142.355 352 160S337.645 192 320 192S288 177.645 288 160S302.355 128 320 128ZM128 288C110.355 288 96 273.645 96 256S110.355 224 128 224S160 238.355 160 256S145.645 288 128 288ZM320 320C337.645 320 352 334.355 352 352S337.645 384 320 384S288 369.645 288 352S302.355 320 320 320Z" })
  }
));
SquareShareNodesLight.displayName = "SquareShareNodesLight";
var SquareShareNodes_default = SquareShareNodesLight;
