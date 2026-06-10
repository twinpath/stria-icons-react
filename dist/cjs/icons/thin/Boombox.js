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
var Boombox_exports = {};
__export(Boombox_exports, {
  default: () => Boombox_default
});
module.exports = __toCommonJS(Boombox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoomboxThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 160V72C576 32.297 543.703 0 504 0H136C96.297 0 64 32.297 64 72V160C28.654 160 0 188.654 0 224V448C0 483.346 28.654 512 64 512H576C611.346 512 640 483.346 640 448V224C640 188.654 611.346 160 576 160ZM80 72C80 41.125 105.125 16 136 16H504C534.875 16 560 41.125 560 72V160H80V72ZM624 448C624 474.467 602.467 496 576 496H64C37.533 496 16 474.467 16 448V224C16 197.533 37.533 176 64 176H576C602.467 176 624 197.533 624 224V448ZM176 224C114.145 224 64 274.145 64 336S114.145 448 176 448S288 397.855 288 336S237.855 224 176 224ZM176 432C123.064 432 80 388.936 80 336S123.064 240 176 240S272 283.064 272 336S228.936 432 176 432ZM464 224C402.145 224 352 274.145 352 336S402.145 448 464 448S576 397.855 576 336S525.855 224 464 224ZM464 432C411.064 432 368 388.936 368 336S411.064 240 464 240S560 283.064 560 336S516.936 432 464 432ZM248 120H200C195.578 120 192 123.578 192 128S195.578 136 200 136H248C252.422 136 256 132.422 256 128S252.422 120 248 120ZM344 120H296C291.578 120 288 123.578 288 128S291.578 136 296 136H344C348.422 136 352 132.422 352 128S348.422 120 344 120ZM440 120H392C387.578 120 384 123.578 384 128S387.578 136 392 136H440C444.422 136 448 132.422 448 128S444.422 120 440 120Z" })
  }
));
BoomboxThin.displayName = "BoomboxThin";
var Boombox_default = BoomboxThin;
