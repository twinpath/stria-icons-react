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
var BedFront_exports = {};
__export(BedFront_exports, {
  default: () => BedFront_default
});
module.exports = __toCommonJS(BedFront_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BedFrontThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 236.188V88C480 57.125 454.875 32 424 32H88C57.125 32 32 57.125 32 88V236.188C12.725 249.121 0 271.094 0 296V472C0 476.422 3.578 480 8 480S16 476.422 16 472V416H496V472C496 476.422 499.578 480 504 480S512 476.422 512 472V296C512 271.094 499.275 249.121 480 236.188ZM72 224C63.543 224 55.543 225.732 48 228.422V168C48 154.766 58.766 144 72 144H224C237.234 144 248 154.766 248 168V224H72ZM464 228.422C456.457 225.732 448.457 224 440 224H264V168C264 154.766 274.766 144 288 144H440C453.234 144 464 154.766 464 168V228.422ZM88 48H424C446.062 48 464 65.938 464 88V136.844C457.244 131.631 449.178 128 440 128H288C274.572 128 263.258 135.074 256 145.25C248.742 135.074 237.428 128 224 128H72C62.822 128 54.756 131.631 48 136.844V88C48 65.938 65.938 48 88 48ZM16 400V296C16 265.125 41.125 240 72 240H440C470.875 240 496 265.125 496 296V400H16Z" })
  }
));
BedFrontThin.displayName = "BedFrontThin";
var BedFront_default = BedFrontThin;
