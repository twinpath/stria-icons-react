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
var SquareHeart_exports = {};
__export(SquareHeart_exports, {
  default: () => SquareHeart_default
});
module.exports = __toCommonJS(SquareHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareHeartLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M293.641 128C270.766 128 249.016 138.75 235.016 153.25L224.016 164.875L212.891 153.25C199.266 139 177.266 128 154.266 128C138.516 128 122.391 133.125 107.891 145.625C72.641 176.25 70.766 231.25 102.266 264.25L211.266 378.375C218.266 385.75 229.641 385.75 236.766 378.375L345.641 264.25C377.266 231.125 375.391 176.25 340.016 145.625C325.641 133.125 309.391 128 293.641 128ZM323.016 242.125L224.016 345.875L125.016 242.125C108.266 224.625 104.641 190.5 128.391 170C136.641 162.875 145.766 160.125 154.766 160.125C168.641 160.125 182.016 167 190.266 175.75L224.016 211L257.766 175.75C265.891 167.125 279.391 160.25 293.266 160.25C302.266 160.25 311.391 163 319.516 170.125C343.391 190.5 339.766 224.5 323.016 242.125ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416Z" })
  }
));
SquareHeartLight.displayName = "SquareHeartLight";
var SquareHeart_default = SquareHeartLight;
