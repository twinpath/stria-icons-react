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
var SquareQuestion_exports = {};
__export(SquareQuestion_exports, {
  default: () => SquareQuestion_default
});
module.exports = __toCommonJS(SquareQuestion_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareQuestionThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 352C199.164 352 192 359.164 192 368S199.164 384 208 384S224 376.836 224 368S216.836 352 208 352ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM256.594 128H191.406C156.438 128 128 156.438 128 191.406V202C128 206.422 131.594 210 136 210S144 206.422 144 202V191.406C144 165.266 165.281 144 191.406 144H256.594C282.719 144 304 165.266 304 191.406C304 208.609 294.656 224.484 279.938 232.672L213.844 265.719C204.312 270.984 198.406 281.031 198.406 291.938V312C198.406 316.422 202 320 206.406 320C210.812 320 214.406 316.422 214.406 312V291.938C214.406 286.859 217.156 282.172 221.281 279.875L287.375 246.828C307.5 235.656 320 214.422 320 191.406C320 156.438 291.562 128 256.594 128Z" })
  }
));
SquareQuestionThin.displayName = "SquareQuestionThin";
var SquareQuestion_default = SquareQuestionThin;
