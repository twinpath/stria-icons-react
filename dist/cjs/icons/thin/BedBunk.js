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
var BedBunk_exports = {};
__export(BedBunk_exports, {
  default: () => BedBunk_default
});
module.exports = __toCommonJS(BedBunk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BedBunkThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 32H224C215.156 32 208 39.156 208 48V192H16V8C16 3.594 12.422 0 8 0S0 3.594 0 8V504C0 508.406 3.578 512 8 512S16 508.406 16 504V448H560V504C560 508.406 563.578 512 568 512S576 508.406 576 504V144C576 82.125 525.875 32 464 32ZM560 432H224V288H464C516.934 288 560 331.064 560 384V432ZM560 327.127C540.486 294.258 505.012 272 464 272H224C215.156 272 208 279.156 208 288V432H16V208H560V327.127ZM560 192H224V48H464C516.934 48 560 91.064 560 144V192ZM112 400C147.348 400 176 371.346 176 336S147.348 272 112 272C76.654 272 48 300.654 48 336S76.654 400 112 400ZM112 288C138.467 288 160 309.533 160 336S138.467 384 112 384S64 362.467 64 336S85.533 288 112 288ZM112 160C147.348 160 176 131.346 176 96S147.348 32 112 32C76.654 32 48 60.654 48 96S76.654 160 112 160ZM112 48C138.467 48 160 69.533 160 96S138.467 144 112 144S64 122.467 64 96S85.533 48 112 48Z" })
  }
));
BedBunkThin.displayName = "BedBunkThin";
var BedBunk_default = BedBunkThin;
