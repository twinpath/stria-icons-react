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
var Megaphone_exports = {};
__export(Megaphone_exports, {
  default: () => Megaphone_default
});
module.exports = __toCommonJS(Megaphone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MegaphoneThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 160C3.594 160 0 163.578 0 168V344C0 348.422 3.594 352 8 352S16 348.422 16 344V168C16 163.578 12.406 160 8 160ZM544 32H512C496.633 32 484.4 43.055 481.312 57.5L53.943 171.463C50.438 172.396 48 175.57 48 179.197C48 184.457 52.986 188.287 58.068 186.933L480 74.418V437.582L172.615 355.613C172.514 355.586 172.479 355.461 172.375 355.437C172.281 355.418 172.209 355.496 172.115 355.477L58.068 325.067C52.986 323.713 48 327.543 48 332.803C48 336.43 50.438 339.604 53.943 340.537L161.744 369.281C160.988 374.16 160 378.992 160 384C160 436.938 203.062 480 256 480C295.662 480 331.283 454.844 345.367 418.25L481.312 454.5C484.4 468.945 496.633 480 512 480H544C561.673 480 576 465.674 576 448V64C576 46.326 561.673 32 544 32ZM256 464C211.875 464 176 428.109 176 384C176 380.398 176.789 376.945 177.26 373.422L329.859 414.113C317.701 443.762 288.484 464 256 464ZM560 448C560 456.824 552.822 464 544 464H512C503.178 464 496 456.824 496 448V64C496 55.176 503.178 48 512 48H544C552.822 48 560 55.176 560 64V448Z" })
  }
));
MegaphoneThin.displayName = "MegaphoneThin";
var Megaphone_default = MegaphoneThin;
