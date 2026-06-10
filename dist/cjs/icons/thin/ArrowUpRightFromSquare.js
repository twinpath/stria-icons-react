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
var ArrowUpRightFromSquare_exports = {};
__export(ArrowUpRightFromSquare_exports, {
  default: () => ArrowUpRightFromSquare_default
});
module.exports = __toCommonJS(ArrowUpRightFromSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpRightFromSquareThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 279.031C435.594 279.031 432 282.609 432 287.031V440C432 470.875 406.875 496 376 496H72C41.125 496 16 470.875 16 440V136C16 105.125 41.125 80 72 80H224.25C228.656 80 232.25 76.422 232.25 72S228.656 64 224.25 64H72C32.312 64 0 96.297 0 136V440C0 479.703 32.312 512 72 512H376C415.688 512 448 479.703 448 440V287.031C448 282.609 444.406 279.031 440 279.031ZM504 0H296C293.789 0 291.801 0.883 290.344 2.342C288.883 3.801 288 5.789 288 7.998C288 12.418 291.578 15.998 296 15.998H484.688L162.344 338.346C159.227 341.461 159.215 346.531 162.344 349.658C165.469 352.785 170.539 352.773 173.656 349.658L496 27.311V216C496 220.42 499.582 224 504 224C508.422 224 512 220.42 512 216V7.998C512 3.58 508.422 0 504 0Z" })
  }
));
ArrowUpRightFromSquareThin.displayName = "ArrowUpRightFromSquareThin";
var ArrowUpRightFromSquare_default = ArrowUpRightFromSquareThin;
