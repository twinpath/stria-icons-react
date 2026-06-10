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
var ArrowUpArrowDown_exports = {};
__export(ArrowUpArrowDown_exports, {
  default: () => ArrowUpArrowDown_default
});
module.exports = __toCommonJS(ArrowUpArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpArrowDownLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 160C228.094 160 232.188 158.438 235.312 155.312C241.562 149.062 241.562 138.937 235.312 132.688L139.312 36.688C133.062 30.438 122.937 30.438 116.688 36.688L20.688 132.688C14.438 138.938 14.438 149.063 20.688 155.312S37.063 161.562 43.312 155.312L112 86.625V464C112 472.844 119.156 480 128 480S144 472.844 144 464V86.625L212.688 155.312C215.812 158.438 219.906 160 224 160ZM427.312 356.688C424.188 353.562 420.094 352 416 352S407.812 353.562 404.688 356.688L336 425.375V48C336 39.156 328.844 32 320 32S304 39.156 304 48V425.375L235.312 356.688C229.062 350.438 218.937 350.438 212.688 356.688S206.438 373.063 212.688 379.312L308.688 475.312C314.938 481.562 325.063 481.562 331.312 475.312L427.312 379.312C433.562 373.062 433.562 362.938 427.312 356.688Z" })
  }
));
ArrowUpArrowDownLight.displayName = "ArrowUpArrowDownLight";
var ArrowUpArrowDown_default = ArrowUpArrowDownLight;
