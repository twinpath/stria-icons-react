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
var ChartScatterBubble_exports = {};
__export(ChartScatterBubble_exports, {
  default: () => ChartScatterBubble_default
});
module.exports = __toCommonJS(ChartScatterBubble_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartScatterBubbleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 464H72C41.125 464 16 438.875 16 408V40C16 35.578 12.422 32 8 32S0 35.578 0 40V408C0 447.688 32.312 480 72 480H504C508.422 480 512 476.422 512 472S508.422 464 504 464ZM176 352C202.51 352 224 330.51 224 304S202.51 256 176 256S128 277.49 128 304S149.49 352 176 352ZM176 272C193.645 272 208 286.355 208 304S193.645 336 176 336S144 321.645 144 304S158.355 272 176 272ZM352 352C387.346 352 416 323.346 416 288S387.346 224 352 224S288 252.654 288 288S316.654 352 352 352ZM352 240C378.467 240 400 261.533 400 288S378.467 336 352 336S304 314.467 304 288S325.533 240 352 240ZM240 224C266.51 224 288 202.51 288 176S266.51 128 240 128S192 149.49 192 176S213.49 224 240 224ZM240 144C257.645 144 272 158.355 272 176S257.645 208 240 208S208 193.645 208 176S222.355 144 240 144ZM384 192C419.346 192 448 163.346 448 128S419.346 64 384 64S320 92.654 320 128S348.654 192 384 192ZM384 80C410.467 80 432 101.533 432 128S410.467 176 384 176S336 154.467 336 128S357.533 80 384 80Z" })
  }
));
ChartScatterBubbleThin.displayName = "ChartScatterBubbleThin";
var ChartScatterBubble_default = ChartScatterBubbleThin;
