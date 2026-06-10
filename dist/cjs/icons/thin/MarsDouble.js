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
var MarsDouble_exports = {};
__export(MarsDouble_exports, {
  default: () => MarsDouble_default
});
module.exports = __toCommonJS(MarsDouble_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsDoubleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632 32H488C483.578 32 480 35.578 480 40S483.578 48 488 48H612.688L480.984 179.703C477.859 182.828 477.859 187.891 480.984 191.016C511.297 221.344 528 261.469 528 304C528 392.219 456.219 464 368 464C352.438 464 337.062 461.766 322.281 457.359C317.984 456.203 313.609 458.531 312.328 462.75C311.078 466.984 313.484 471.438 317.719 472.703C333.969 477.547 350.891 480 368 480C465.047 480 544 401.047 544 304C544 259.859 527.656 218.078 497.828 185.484L624 59.312V184C624 188.422 627.578 192 632 192S640 188.422 640 184V40C640 35.578 636.422 32 632 32ZM305.838 185.477L432 59.312V184C432 188.422 435.578 192 440 192S448 188.422 448 184V40C448 35.578 444.422 32 440 32H296C291.578 32 288 35.578 288 40S291.578 48 296 48H420.688L294.525 174.164C263.232 145.578 221.721 128 176 128C78.799 128 0 206.797 0 304S78.799 480 176 480C273.203 480 352 401.203 352 304C352 258.281 334.42 216.766 305.838 185.477ZM176 464C87.775 464 16 392.223 16 304S87.775 144 176 144S336 215.777 336 304S264.225 464 176 464Z" })
  }
));
MarsDoubleThin.displayName = "MarsDoubleThin";
var MarsDouble_default = MarsDoubleThin;
