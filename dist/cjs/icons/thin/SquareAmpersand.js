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
var SquareAmpersand_exports = {};
__export(SquareAmpersand_exports, {
  default: () => SquareAmpersand_default
});
module.exports = __toCommonJS(SquareAmpersand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareAmpersandThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM290.869 325.941L333.375 265.844C335.937 262.234 335.062 257.234 331.469 254.687C327.844 252.125 322.875 252.969 320.312 256.594L279.693 314.023L211.312 241.109L248.219 211.359C259.687 202.422 266.281 189.109 266.281 174.844C266.281 149.016 244.625 128 218 128H195.719C169.094 128 147.438 149.016 147.438 174.844C147.438 188.875 152.813 202.281 162.562 212.547L187.844 239.484L135.312 281.812C121.219 292.75 113.156 309.062 113.156 326.578C113.156 358.234 139.75 384 172.438 384H211.313C235.406 384 257.938 372.516 271.531 353.281L281.434 339.281L321 381.469C324.094 384.719 329.125 384.859 332.312 381.828C335.531 378.813 335.688 373.75 332.688 370.531L290.869 325.941ZM174.219 201.578C167.25 194.25 163.438 184.75 163.438 174.844C163.438 157.844 177.906 144 195.719 144H218C235.812 144 250.281 157.844 250.281 174.844C250.281 184.141 245.937 192.859 238.281 198.812L200.312 229.422L174.219 201.578ZM258.469 344.031C247.875 359.047 230.219 368 211.312 368H172.438C148.562 368 129.156 349.422 129.156 326.578C129.156 314.047 134.969 302.328 145.25 294.359L198.812 251.188L270.258 327.365L258.469 344.031Z" })
  }
));
SquareAmpersandThin.displayName = "SquareAmpersandThin";
var SquareAmpersand_default = SquareAmpersandThin;
