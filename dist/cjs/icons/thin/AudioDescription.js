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
var AudioDescription_exports = {};
__export(AudioDescription_exports, {
  default: () => AudioDescription_default
});
module.exports = __toCommonJS(AudioDescription_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AudioDescriptionThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M198.953 164.422C197.594 161.703 194.828 160 191.797 160S185.984 161.719 184.641 164.422L96.844 340.422C94.875 344.375 96.469 349.188 100.422 351.156C101.578 351.734 102.797 352 104 352C106.938 352 109.766 350.375 111.156 347.578L140.877 288H242.986L272.844 347.578C274.844 351.547 279.656 353.141 283.578 351.156C287.531 349.172 289.125 344.359 287.156 340.422L198.953 164.422ZM148.857 272L191.812 185.891L234.967 272H148.857ZM512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.348 480 576 451.346 576 416V96C576 60.652 547.348 32 512 32ZM560 416C560 442.467 538.467 464 512 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H512C538.467 48 560 69.533 560 96V416ZM392 160H328C323.594 160 320 163.578 320 168V344C320 348.422 323.594 352 328 352H392C444.938 352 488 308.938 488 256S444.938 160 392 160ZM392 336H336V176H392C436.125 176 472 211.891 472 256S436.125 336 392 336Z" })
  }
));
AudioDescriptionThin.displayName = "AudioDescriptionThin";
var AudioDescription_default = AudioDescriptionThin;
