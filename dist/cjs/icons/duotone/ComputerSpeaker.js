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
var ComputerSpeaker_exports = {};
__export(ComputerSpeaker_exports, {
  default: () => ComputerSpeaker_default
});
module.exports = __toCommonJS(ComputerSpeaker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ComputerSpeakerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592 32H368C342.4 32 320 54.4 320 80V432C320 457.6 342.4 480 368 480H592C617.6 480 640 457.6 640 432V80C640 54.4 617.6 32 592 32ZM480 96C499.199 96 512 108.799 512 128C512 147.199 499.199 160 480 160S448 147.199 448 128C448 108.799 460.801 96 480 96ZM480 416C425.6 416 384 374.4 384 320S425.6 224 480 224S576 265.6 576 320S534.4 416 480 416ZM288 416H128C108.801 416 96 428.799 96 448C96 467.199 108.801 480 128 480H304C294.4 467.199 288 448 288 432V416ZM0 80V336C0 361.6 22.4 384 48 384H288V320H64V96H288V80C288 64 294.4 44.799 304 32H48C22.4 32 0 54.4 0 80Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 160C499.199 160 512 147.199 512 128C512 108.799 499.199 96 480 96S448 108.799 448 128C448 147.199 460.801 160 480 160ZM480 224C425.6 224 384 265.6 384 320S425.6 416 480 416S576 374.4 576 320S534.4 224 480 224ZM480 368C454.4 368 432 345.6 432 320S454.4 272 480 272S528 294.4 528 320S505.6 368 480 368ZM64 320H288V96H64V320Z" })
    ]
  }
));
ComputerSpeakerDuotone.displayName = "ComputerSpeakerDuotone";
var ComputerSpeaker_default = ComputerSpeakerDuotone;
