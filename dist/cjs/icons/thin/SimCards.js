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
var SimCards_exports = {};
__export(SimCards_exports, {
  default: () => SimCards_default
});
module.exports = __toCommonJS(SimCards_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SimCardsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 176V320C160 337.75 174.25 352 192 352H352C369.75 352 384 337.75 384 320V176C384 158.25 369.75 144 352 144H192C174.25 144 160 158.25 160 176ZM224 336H192C183.027 336 176 328.971 176 320V288H224V336ZM304 336H240V288H304V336ZM368 320C368 328.971 360.973 336 352 336H320V288H368V320ZM368 272H176V224H368V272ZM320 160H352C360.973 160 368 167.027 368 176V208H320V160ZM240 160H304V208H240V160ZM224 208H176V176C176 167.027 183.027 160 192 160H224V208ZM320 0H160C124.75 0 96 28.75 96 64V352C96 387.25 124.75 416 160 416H384C419.25 416 448 387.25 448 352V128L320 0ZM432 352C432 378.467 410.467 400 384 400H160C133.533 400 112 378.467 112 352V64C112 37.533 133.533 16 160 16H313.373L432 134.627V352ZM344 448C339.578 448 336 451.594 336 456C336 478.062 318.062 496 296 496H72C41.125 496 16 470.875 16 440V152C16 129.938 33.938 112 56 112C60.422 112 64 108.406 64 104S60.422 96 56 96C25.125 96 0 121.125 0 152V440C0 479.688 32.297 512 72 512H296C326.875 512 352 486.875 352 456C352 451.594 348.422 448 344 448Z" })
  }
));
SimCardsThin.displayName = "SimCardsThin";
var SimCards_default = SimCardsThin;
