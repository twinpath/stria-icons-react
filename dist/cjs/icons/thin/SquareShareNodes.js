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
const SquareShareNodesThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM336 192C362.51 192 384 170.51 384 144S362.51 96 336 96S288 117.49 288 144C288 148.871 288.939 153.48 290.289 157.91L150.629 227.74C141.895 215.826 127.904 208 112 208C85.49 208 64 229.49 64 256S85.49 304 112 304C127.904 304 141.895 296.174 150.629 284.26L290.289 354.09C288.939 358.52 288 363.129 288 368C288 394.51 309.49 416 336 416S384 394.51 384 368S362.51 320 336 320C320.096 320 306.105 327.826 297.371 339.74L157.711 269.91C159.061 265.48 160 260.871 160 256S159.061 246.52 157.711 242.09L297.371 172.26C306.105 184.174 320.096 192 336 192ZM336 112C353.645 112 368 126.355 368 144S353.645 176 336 176S304 161.645 304 144S318.355 112 336 112ZM112 288C94.355 288 80 273.645 80 256S94.355 224 112 224S144 238.355 144 256S129.645 288 112 288ZM336 336C353.645 336 368 350.355 368 368S353.645 400 336 400S304 385.645 304 368S318.355 336 336 336Z" })
  }
));
SquareShareNodesThin.displayName = "SquareShareNodesThin";
var SquareShareNodes_default = SquareShareNodesThin;
